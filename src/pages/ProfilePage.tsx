// Profile.tsx
import { FC, useState, useEffect } from "react";

interface UserProfile {
	username: string;
	email: string;
	// Add more fields as needed
}

const Profile: FC = () => {
	// Dummy user profile data
	const dummyUser: UserProfile = {
		username: "testuser",
		email: "testuser@example.com",
	};

	const [user, setUser] = useState<UserProfile | null>(null);
	const [editMode, setEditMode] = useState<boolean>(false);
	const [formData, setFormData] = useState<UserProfile>({
		username: "",
		email: "",
	});

	useEffect(() => {
		// Simulate fetching user data
		setUser(dummyUser);
		setFormData(dummyUser);
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Simulate saving data
		setUser(formData);
		setEditMode(false);
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
			<div className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
				<h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
					{editMode ? "Edit Profile" : "Profile"}
				</h2>
				{user && (
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Username */}
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
								disabled={!editMode}
								className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							/>
						</div>

						{/* Email */}
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
								disabled={!editMode}
								className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							/>
						</div>

						{/* Save or Edit Button */}
						<div className="flex justify-between">
							{editMode ? (
								<>
									<button
										type="submit"
										className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
									>
										Save
									</button>
									<button
										type="button"
										onClick={() => setEditMode(false)}
										className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
									>
										Cancel
									</button>
								</>
							) : (
								<button
									type="button"
									onClick={() => setEditMode(true)}
									className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
								>
									Edit
								</button>
							)}
						</div>
					</form>
				)}

				<h2 className="text-center w-full p-4 bg-red-500">Coming Soon...</h2>
			</div>
		</div>
	);
};

export default Profile;
