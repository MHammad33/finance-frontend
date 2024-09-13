import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import ApexCharts from "react-apexcharts";
import { RootState } from "../../store/index"; // Adjust the import path as needed

const ExpensesChart: FC = () => {
	// Fetch transactions from the Redux state
	const transactions = useSelector(
		(state: RootState) => state.transactions.transactions
	);

	// Calculate total expenses by category
	const { categories, expenses } = useMemo(() => {
		const totals: Record<string, number> = {};

		transactions.forEach((transaction: any) => {
			if (transaction.type === "expense") {
				if (totals[transaction.category]) {
					totals[transaction.category] += transaction.amount;
				} else {
					totals[transaction.category] = transaction.amount;
				}
			}
		});

		return {
			categories: Object.keys(totals),
			expenses: Object.values(totals),
		};
	}, [transactions]);

	const options = {
		chart: {
			type: "bar" as const,
		},
		xaxis: {
			categories: categories,
		},
		colors: ["#FF4560"],
	};

	const series = [
		{
			name: "Expenses",
			data: expenses,
		},
	];

	return (
		<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
			<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
				Expenses Breakdown
			</h2>
			<ApexCharts options={options} series={series} type="bar" height={300} />
		</div>
	);
};

export default ExpensesChart;
