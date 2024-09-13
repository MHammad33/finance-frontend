import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import BudgetOverviewChart from "./charts/BudgetOverviewChart";

interface Transaction {
	amount: number;
	type: "income" | "expense";
	date: string;
}

const calculateBudget = (): number => {
	// TODO: Make this dynamic
	return 70000;
};

const calculateSavings = (transactions: Transaction[]): number => {
	const totalIncome = transactions
		.filter((transaction) => transaction.type === "income")
		.reduce((total, transaction) => total + transaction.amount, 0);

	return totalIncome;
};

const calculateUpcomingBills = (transactions: Transaction[]): number => {
	const totalExpenses = transactions
		.filter((transaction) => transaction.type === "expense")
		.reduce((total, transaction) => total + transaction.amount, 0);

	return totalExpenses;
};

const BudgetSection: FC = () => {
	const transactions = useSelector(
		(state: RootState) => state.transactions.transactions
	);

	const budget = calculateBudget();
	const savings = calculateSavings(transactions);
	const upcomingBills = calculateUpcomingBills(transactions);

	return (
		<section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
			<p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
				An overview of your budget helps you understand how well you are
				managing your finances. Review your monthly budget, savings, and
				upcoming bills in one place.
			</p>
			<div className="flex flex-col lg:flex-row gap-6 mb-6">
				<div className="bg-blue-100 dark:bg-blue-700 p-4 rounded-lg flex-1">
					<h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-100">
						Monthly Budget
					</h3>
					<p className="text-xl font-bold text-blue-600 dark:text-blue-400">
						₨ {budget.toLocaleString()}
					</p>
					<p className="text-sm text-gray-700 dark:text-gray-400">
						Your allocated budget for this month. Use this to plan and allocate
						funds across different categories.
					</p>
				</div>
				<div className="bg-green-100 dark:bg-green-700 p-4 rounded-lg flex-1">
					<h3 className="text-lg font-semibold mb-2 text-green-900 dark:text-green-100">
						Savings
					</h3>
					<p className="text-xl font-bold text-green-600 dark:text-green-400">
						₨ {savings.toLocaleString()}
					</p>
					<p className="text-sm text-gray-700 dark:text-gray-400">
						Total savings accumulated. This amount reflects your surplus funds
						after expenses and savings goals.
					</p>
				</div>
				<div className="bg-yellow-100 dark:bg-yellow-700 p-4 rounded-lg flex-1">
					<h3 className="text-lg font-semibold mb-2 text-yellow-900 dark:text-yellow-100">
						Upcoming Bills
					</h3>
					<p className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
						₨ {upcomingBills.toLocaleString()}
					</p>
					<p className="text-sm text-gray-700 dark:text-gray-400">
						Projected total of upcoming bills. Plan ahead to ensure you have
						sufficient funds to cover these expenses.
					</p>
				</div>
			</div>
			<BudgetOverviewChart />
		</section>
	);
};

export default BudgetSection;
