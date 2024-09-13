import authService from "@/services/authService";
import {
	loginFailure,
	loginStart,
	loginSuccess,
} from "@/store/slices/authSlice";
import { setLoading } from "@/store/slices/loadingSlice";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login: FC = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Login form data:", formData);

		dispatch(loginStart());
		dispatch(setLoading(true));
		try {
			const user: any = await authService.login(formData);
			dispatch(loginSuccess(user));
			toast("Login Successfull");
			navigate("/dashboard");
		} catch (error) {
			dispatch(loginFailure());
			toast.error("Invalid Username or Password");
		} finally {
			dispatch(setLoading(false));
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
			>
				<h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
					Login
				</h2>
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</div>
				<div>
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						required
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</div>
				<button
					type="submit"
					className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
