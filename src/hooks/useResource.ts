import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface ResourceBase {
	id?: string;
}

export const useResource = <T extends ResourceBase>(baseUrl: string) => {
	const [resources, setResources] = useState<T[]>([]);
	const [error, setError] = useState<AxiosError | null>(null);

	useEffect(() => {
		const fetchResources = async () => {
			try {
				const response = await axios.get<T[]>(baseUrl);
				setResources(response.data);
			} catch (error: unknown) {
				setError(error as AxiosError);
				console.error("Error fetching resources:", error);
			}
		};

		fetchResources();
	}, [baseUrl]);

	const create = async (resource: Omit<T, "id">) => {
		try {
			const response = await axios.post<T>(baseUrl, resource);
			setResources([...resources, response.data]);
		} catch (error: unknown) {
			setError(error as AxiosError);
			console.error("Error creating resource:", error);
			throw error;
		}
	};

	const update = async (id: string, updatedResource: Partial<T>) => {
		try {
			const response = await axios.put<T>(`${baseUrl}/${id}`, updatedResource);
			setResources(
				resources.map((resource) =>
					resource.id === id ? response.data : resource
				)
			);
		} catch (error: unknown) {
			setError(error as AxiosError);
			console.error("Error updating resource:", error);
			throw error;
		}
	};

	const remove = async (id: string) => {
		try {
			await axios.delete<T>(`${baseUrl}/${id}`);
			setResources(resources.filter((resource) => resource.id !== id));
		} catch (error: unknown) {
			setError(error as AxiosError);
			console.error("Error deleting resource:", error);
			throw error;
		}
	};

	const get = async (id: string) => {
		try {
			const response = await axios.get<T>(`${baseUrl}/${id}`);
			return response.data;
		} catch (error: unknown) {
			setError(error as AxiosError);
			console.error("Error fetching resource:", error);
			throw error;
		}
	};

	const service = {
		create,
		update,
		remove,
		get,
	};

	return [resources, service] as const;
};
