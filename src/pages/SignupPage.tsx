import authService from "@/services/authService";
import { setLoading } from "@/store/slices/loadingSlice";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Signup: FC = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(setLoading(true));
		try {
			await authService.register(formData);
			toast.success("Registered Successfully. Login to get access to our app.");
		} catch (error) {
			console.log("Error Registering...", error);
			toast.error("Registration failed. Please try again later.");
		} finally {
			dispatch(setLoading(false));
			setFormData({
				username: "",
				email: "",
				password: "",
			});
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
			>
				<h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
					Sign Up
				</h2>
				<div>
					<label
						htmlFor="username"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Username
					</label>
					<input
						type="text"
						id="username"
						name="username"
						value={formData.username}
						onChange={handleChange}
						required
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</div>
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
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default Signup;
