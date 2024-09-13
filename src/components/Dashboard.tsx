import { FC, useEffect, useMemo } from "react";
import IncomeChart from "./charts/IncomeChart";
import ExpensesChart from "./charts/ExpensesChart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import BudgetSection from "./BudgetSection";
import { fetchAllTransactions } from "@/store/slices/transactionSlice";
import { setLoading } from "@/store/slices/loadingSlice";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
	const allTransactions = useSelector(
		(state: RootState) => state.transactions.transactions
	);

	const transactions = useMemo(
		() =>
			allTransactions &&
			[...allTransactions]
				.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
				.slice(0, 5),
		[allTransactions]
	);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(setLoading(true));
		dispatch(fetchAllTransactions());
		dispatch(setLoading(false));
	}, []);

	return (
		<div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-6 md:p-8">
			<h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
				Dashboard Overview
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
					<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
						Recent Transactions
					</h2>
					<p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
						Stay on top of your recent transactions to monitor your spending
						habits and income sources.
					</p>
					<ul className="space-y-4">
						{transactions?.map((transaction) => (
							<li className="flex justify-between text-gray-700 dark:text-gray-300">
								<span>{transaction.category}</span>
								<span>₨ {transaction.amount}</span>
							</li>
						))}
					</ul>
				</section>

				<section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 col-span-1 md:col-span-2 lg:col-span-2">
					<IncomeChart />
				</section>

				<section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
					<ExpensesChart />
				</section>

				<BudgetSection />
			</div>
		</div>
	);
};

export default Dashboard;
