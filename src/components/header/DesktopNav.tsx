import { FC } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { logout, useAuth } from "@/store/slices/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const DesktopNav: FC = () => {
	const dispatch = useDispatch();
	const { isLoggedIn } = useAuth();

	return (
		<div className="hidden md:flex items-center space-x-2">
			<div className="flex space-x-4">
				<Link
					to="/dashboard"
					className="px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
				>
					Dashboard
				</Link>
				<Link
					to="/about"
					className="px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
				>
					About
				</Link>
				<Link
					to="/transactions"
					className="px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
				>
					Transactions
				</Link>
			</div>
			{!isLoggedIn ? (
				<div className="flex space-x-2">
					<Link
						to="/login"
						className="text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded"
					>
						Sign in
					</Link>
					<Link
						to="/signup"
						className="text-white bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded"
					>
						Register
					</Link>
				</div>
			) : (
				<div className="flex space-x-2">
					<Link
						to="/"
						className="text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded"
						onClick={() => {
							dispatch(logout());
							toast.success("Signed out successfully");
						}}
					>
						Logout
					</Link>
					<Link
						to="/profile"
						className="flex items-center text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded"
					>
						<User size={20} />
					</Link>
				</div>
			)}
		</div>
	);
};

export default DesktopNav;
