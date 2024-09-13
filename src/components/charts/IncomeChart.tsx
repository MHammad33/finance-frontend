import { RootState } from "@/store";
import { FC, useMemo } from "react";
import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";

const getLastSixMonths = () => {
	const months = [];
	const date = new Date();

	for (let i = 0; i < 6; i++) {
		months.unshift(date.toLocaleString("default", { month: "long" }));
		date.setMonth(date.getMonth() - 1);
	}

	return months;
};

const calculateMonthlyIncome = (
	transactions: any[],
	lastSixMonths: string[]
) => {
	const monthlyIncome: { [key: string]: number } = {};

	lastSixMonths.forEach((month) => {
		monthlyIncome[month] = 0;
	});

	transactions.forEach((transaction) => {
		const transactionDate = new Date(transaction.date);
		const transactionMonth = transactionDate.toLocaleString("default", {
			month: "long",
		});

		if (
			transaction.type === "income" &&
			monthlyIncome.hasOwnProperty(transactionMonth)
		) {
			monthlyIncome[transactionMonth] += transaction.amount;
		}
	});

	return lastSixMonths.map((month) => monthlyIncome[month]);
};

const IncomeChart: FC = () => {
	const allTransactions = useSelector(
		(state: RootState) => state.transactions.transactions
	);
	const lastSixMonths = getLastSixMonths();
	const incomeData = useMemo(
		() => calculateMonthlyIncome(allTransactions, lastSixMonths),
		[allTransactions, lastSixMonths]
	);

	const options = {
		chart: {
			type: "line" as const,
		},
		xaxis: {
			categories: lastSixMonths,
		},
		colors: ["#00E396"],
	};

	const series = [
		{
			name: "Income",
			data: incomeData,
		},
	];

	return (
		<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
			<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
				Income Over Time (Last 6 Months)
			</h2>
			<ApexCharts options={options} series={series} type="line" height={300} />
		</div>
	);
};

export default IncomeChart;
