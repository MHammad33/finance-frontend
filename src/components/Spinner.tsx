import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

const Spinner: React.FC = () => {
	const isLoading = useSelector((state: RootState) => state.loading.isLoading);

	if (!isLoading) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
			<div className="relative flex items-center justify-center">
				<div className="absolute w-24 h-24 rounded-full bg-blue-500 opacity-30 animate-ping"></div>
				<div className="w-16 h-16 border-4 border-t-4 border-t-blue-500 border-blue-300 rounded-full animate-spin"></div>
			</div>
		</div>
	);
};

export default Spinner;
