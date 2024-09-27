import { Transaction } from "@/types/transaction.type";
import { FC } from "react";
import TransactionTableHeader from "./TransactionTableHeader";

const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  timeZone: "Asia/Karachi",
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
};

const CURRENCY_FORMAT_OPTIONS: Intl.NumberFormatOptions = {
  style: "currency",
  currency: "PKR"
};

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: FC<TransactionTableProps> = ({ transactions }) => {
  return (
    <table className="min-w-full bg-white dark:bg-gray-800 mt-6">
      <TransactionTableHeader />
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id} className="border-b">
            <td className="py-2 px-4">
              {new Intl.DateTimeFormat("en-GB", DATE_FORMAT_OPTIONS).format(
                new Date(transaction.date)
              )}
            </td>
            <td className="py-2 px-4">{transaction.description}</td>
            <td className="py-2 px-4">{transaction.category}</td>
            <td
              className={`py-2 px-4 ${
                transaction.type === "income"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {transaction.amount.toLocaleString(
                "ur-PK",
                CURRENCY_FORMAT_OPTIONS
              )}
            </td>
            <td className="py-2 px-4 capitalize">{transaction.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
