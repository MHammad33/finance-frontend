import transactionService from "@/services/transactionService";
import { addTransaction } from "@/store/slices/transactionSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface Transaction {
	date: string;
	description: string;
	amount: number;
	type: "income" | "expense";
	category: string;
}

const predefinedCategories = [
	"Salary",
	"Food",
	"Entertainment",
	"Utilities",
	"Healthcare",
	"Transportation",
];

const TransactionForm: React.FC = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState<Transaction>({
		amount: 0,
		description: "",
		type: "income",
		category: "",
		date: "",
	});

	const [isCustomCategory, setIsCustomCategory] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setFormData({ ...formData, category: value });
		setIsCustomCategory(value === "custom");
	};

	const handleCustomCategoryChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setFormData({ ...formData, category: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const data = await transactionService.addTransaction(formData);
		dispatch(addTransaction(data));

		toast("Transaction Added Successfully");

		setFormData({
			amount: 0,
			description: "",
			type: "income",
			category: "",
			date: "",
		});
		setIsCustomCategory(false);
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
			>
				<h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
					Add Transaction
				</h2>

				<div>
					<label
						htmlFor="amount"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Amount
					</label>
					<input
						type="number"
						id="amount"
						name="amount"
						value={formData.amount}
						onChange={handleChange}
						onFocus={(e) => e.target.select()}
						required
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</div>

				<div>
					<label
						htmlFor="description"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Description
					</label>
					<input
						type="text"
						id="description"
						name="description"
						value={formData.description}
						onChange={handleChange}
						onFocus={(e) => e.target.select()}
						required
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</div>

				<div>
					<label
						htmlFor="type"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Type
					</label>
					<select
						id="type"
						name="type"
						value={formData.type}
						onChange={handleChange}
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					>
						<option value="income">Income</option>
						<option value="expense">Expense</option>
					</select>
				</div>

				<div>
					<label
						htmlFor="category"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Category
					</label>
					<select
						id="category"
						name="category"
						value={formData.category}
						onChange={handleCategoryChange}
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
						required
					>
						<option value="">Select a category</option>
						{predefinedCategories.map((cat) => (
							<option key={cat} value={cat}>
								{cat}
							</option>
						))}
						<option value="custom">Custom</option>
					</select>
					{isCustomCategory && (
						<input
							type="text"
							id="customCategory"
							name="category"
							value={formData.category}
							onChange={handleCustomCategoryChange}
							required
							placeholder="Enter custom category"
							className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
						/>
					)}
				</div>

				<div>
					<label
						htmlFor="date"
						className="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Date
					</label>
					<input
						type="date"
						id="date"
						name="date"
						value={formData.date}
						onChange={handleChange}
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
					/>
				</div>

				<button
					type="submit"
					className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
				>
					Add Transaction
				</button>
			</form>
		</div>
	);
};

export default TransactionForm;
