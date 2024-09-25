import axios from "axios";
import { useEffect, useState } from "react";

interface ResourceBase {
	id?: string;
}

export const useResource = <T extends ResourceBase>(baseUrl: string) => {
	const getAuthConfig = () => {
		const storedToken = localStorage.getItem("token");
		const token = storedToken ? `Bearer ${JSON.parse(storedToken)}` : "";
		if (!token) throw new Error("Authorization token is missing.");

		const config = {
			headers: {
				Authorization: token,
			},
		};
		return config;
	};

	const [resources, setResources] = useState<T[]>([]);
	useEffect(() => {
		const fetchResources = async () => {
			try {
				const config = getAuthConfig();
				const response = await axios.get<T[]>(baseUrl, config);
				setResources(response.data);
			} catch (error: unknown) {
				console.error("Error fetching resources:", error);
			}
		};

		fetchResources();
	}, [baseUrl]);

	const create = async (resource: Omit<T, "id">) => {
		try {
			const config = getAuthConfig();
			const response = await axios.post<T>(baseUrl, resource, config);
			setResources([...resources, response.data]);
		} catch (error: unknown) {
			console.error("Error creating resource:", error);
			throw error;
		}
	};

	const update = async (id: string, updatedResource: Partial<T>) => {
		try {
			const config = getAuthConfig();
			const response = await axios.put<T>(
				`${baseUrl}/${id}`,
				updatedResource,
				config
			);
			setResources(
				resources.map((resource) =>
					resource.id === id ? response.data : resource
				)
			);
		} catch (error: unknown) {
			console.error("Error updating resource:", error);
			throw error;
		}
	};

	const remove = async (id: string) => {
		try {
			const config = getAuthConfig();
			await axios.delete<T>(`${baseUrl}/${id}`, config);
			setResources(resources.filter((resource) => resource.id !== id));
		} catch (error: unknown) {
			console.error("Error deleting resource:", error);
			throw error;
		}
	};

	const get = async (id: string) => {
		try {
			const config = getAuthConfig();
			const response = await axios.get<T>(`${baseUrl}/${id}`, config);
			return response.data;
		} catch (error: unknown) {
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
