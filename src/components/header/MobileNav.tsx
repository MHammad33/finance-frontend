import { logout, useAuth } from "@/store/slices/authSlice";
import { User } from "lucide-react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface MobileNavProps {
	isMenuOpen: boolean;
	closeMenu(): void;
}

const MobileNav: FC<MobileNavProps> = ({ isMenuOpen, closeMenu }) => {
	const dispatch = useDispatch();
	const { isLoggedIn } = useAuth();

	return (
		<nav
			className={`flex flex-col md:flex-row items-center md:space-x-4 bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out border-t md:border-none ${
				isMenuOpen ? "flex" : "hidden"
			} absolute md:static top-16 left-0 w-full md:w-auto p-4 md:p-0 z-20 ${
				isMenuOpen ? "shadow-lg" : ""
			}`}
		>
			<Link
				to="/dashboard"
				className="px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
				onClick={closeMenu}
			>
				Dashboard
			</Link>
			<Link
				to="/about"
				className="block px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
				onClick={closeMenu}
			>
				About
			</Link>
			<Link
				to="/transactions"
				className="block px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
				onClick={closeMenu}
			>
				Transactions
			</Link>

			{!isLoggedIn ? (
				<div
					className={`flex flex-col items-center w-full space-y-2 transition-opacity duration-300 ease-in-out ${
						isMenuOpen ? "opacity-100" : "opacity-0"
					}`}
				>
					<Link
						to="/login"
						className="block px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
						onClick={closeMenu}
					>
						Login
					</Link>
					<Link
						to="/signup"
						className="block px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
						onClick={closeMenu}
					>
						Sign Up
					</Link>
				</div>
			) : (
				<>
					<Link
						to="/"
						className="text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded"
						onClick={() => {
							dispatch(logout());
							toast.success("Signed out successfully");
							closeMenu();
						}}
					>
						Logout
					</Link>
					<Link
						to="/profile"
						className="flex items-center justify-center gap-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded"
						onClick={closeMenu}
					>
						<User size={20} />
						Profile
					</Link>
				</>
			)}
		</nav>
	);
};
export default MobileNav;
