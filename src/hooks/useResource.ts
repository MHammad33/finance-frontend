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
};
