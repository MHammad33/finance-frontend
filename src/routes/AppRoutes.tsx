import { Layout } from "@/components";
import AuthLayout from "@/components/AuthLayout";
import Spinner from "@/components/Spinner";
import React, { lazy, Suspense } from "react";
import {
	createBrowserRouter,
	RouterProvider,
	RouteObject,
} from "react-router-dom";

const Home = lazy(() => import("../pages/Homepage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Signup = lazy(() => import("../pages/SignupPage"));
const About = lazy(() => import("../pages/AboutPage"));
const Transaction = lazy(() => import("../pages/TransactionPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "/", element: <Home isLoggedIn={false} /> },
			{
				path: "login",
				element: (
					<AuthLayout requiresAuth={false}>
						<Login />
					</AuthLayout>
				),
			},
			{
				path: "signup",
				element: (
					<AuthLayout requiresAuth={false}>
						<Signup />
					</AuthLayout>
				),
			},
			{ path: "about", element: <About /> },
			{
				path: "transactions",
				element: (
					<AuthLayout>
						<Transaction />
					</AuthLayout>
				),
			},
			{
				path: "dashboard",
				element: (
					<AuthLayout>
						<DashboardPage />
					</AuthLayout>
				),
			},
			{
				path: "profile",
				element: (
					<AuthLayout>
						<ProfilePage />
					</AuthLayout>
				),
			},
		],
	},
];

const router = createBrowserRouter(routes);

const AppRoutes: React.FC = () => {
	return (
		// TODO: Create Loading Component
		<Suspense
			fallback={
				<div>
					<Spinner />
				</div>
			}
		>
			<RouterProvider router={router} />
		</Suspense>
	);
};

export default AppRoutes;
