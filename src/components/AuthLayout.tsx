import { RootState } from "@/store";
import { FC, ReactNode, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

interface AuthGuardProps {
	children: ReactNode;
	requiresAuth?: boolean;
}

const Protected: FC<AuthGuardProps> = ({ children, requiresAuth = true }) => {
	const { isLoggedIn, isLoading } = useSelector(
		(state: RootState) => state.auth
	);

	const navigate = useNavigate();

	const handleNavigation = useCallback(() => {
		if (!isLoggedIn && requiresAuth) {
			navigate("/login");
		}
	}, [isLoggedIn, navigate, requiresAuth]);

	useEffect(() => {
		handleNavigation();
	}, [handleNavigation]);

	if (isLoading) {
		return (
			<div>
				<Spinner />
			</div>
		);
	}

	return isLoggedIn || !requiresAuth ? <>{children}</> : null;
};

export default Protected;
