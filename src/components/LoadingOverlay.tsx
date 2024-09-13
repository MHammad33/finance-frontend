import React from "react";
import Spinner from "./Spinner";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

interface LoadingOverlayProps {
	children: React.ReactNode;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ children }) => {
	const isLoading = useSelector((state: RootState) => state.loading.isLoading);
	return (
		<div className="relative">
			<Spinner />
			<div className={isLoading ? "pointer-events-none" : ""}>{children}</div>
		</div>
	);
};

export default LoadingOverlay;
