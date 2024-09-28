import { Transaction } from "@/types/transaction.type";
import { FC } from "react";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions: FC<RecentTransactionsProps> = ({ transactions }) => {
  return (
    <section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Recent Transactions
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Stay on top of your recent transactions to monitor your spending habits
        and income sources.
      </p>
      <ul className="space-y-4">
        {transactions?.map(transaction => (
          <li className="flex justify-between text-gray-700 dark:text-gray-300">
            <span>{transaction.category}</span>
            <span>₨ {transaction.amount}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentTransactions;
