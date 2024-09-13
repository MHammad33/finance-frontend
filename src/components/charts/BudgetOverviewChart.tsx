import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import ApexCharts from "react-apexcharts";
import { RootState } from "../../store/index"; // Adjust the import based on your project structure

const BudgetOverviewChart: FC = () => {
	const transactions = useSelector(
		(state: RootState) => state.transactions.transactions
	);

	const categoryData = useMemo(() => {
		const totals: Record<string, number> = {};

		transactions.forEach((transaction) => {
			if (totals[transaction.category]) {
				totals[transaction.category] += transaction.amount;
			} else {
				totals[transaction.category] = transaction.amount;
			}
		});

		const labels = Object.keys(totals);
		const series = Object.values(totals);

		return { labels, series };
	}, [transactions]);

	const options = {
		chart: {
			type: "pie" as const,
		},
		labels: categoryData.labels,
		colors: [
			"#008FFB",
			"#00E396",
			"#FF4560",
			"#775DD0",
			"#FEB019",
			"#FF66B3",
			"#FFCC00",
		],
	};

	return (
		<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
			<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
				Budget Overview
			</h2>
			<ApexCharts
				options={options}
				series={categoryData.series}
				type="pie"
				height={300}
			/>
		</div>
	);
};

export default BudgetOverviewChart;
