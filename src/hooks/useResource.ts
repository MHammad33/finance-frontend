import axios from "axios";
import { useEffect, useState } from "react";

export const useResource = <T>(baseUrl: string) => {
	const [resources, setResources] = useState<T[]>([]);

	useEffect(() => {
		const fetchResources = async () => {
			try {
				const response = await axios.get(baseUrl);
				setResources(response.data);
			} catch (error) {
				console.error("Error fetching resources:", error);
			}
		};

		fetchResources();
	}, [baseUrl]);

	const create = async (resource: T) => {
		try {
			const response = await axios.post<T>(baseUrl, resource);
			setResources([...resources, response.data]);
		} catch (error) {
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
		} catch (error) {
			console.error("Error updating resource:", error);
			throw error;
		}
	};

	const service = {
		create,
	};

	return [resources, service] as const;
};
