import { Transaction } from "@/types/transaction.type";
import { FC } from "react";

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

interface TransactionTableRowProps {
  transaction: Transaction;
}

const TransactionTableRow: FC<TransactionTableRowProps> = ({ transaction }) => {
  return (
    <tr className="border-b">
      <td className="py-2 px-4">
        {new Intl.DateTimeFormat("en-GB", DATE_FORMAT_OPTIONS).format(
          new Date(transaction.date)
        )}
      </td>
      <td className="py-2 px-4">{transaction.description}</td>
      <td className="py-2 px-4">{transaction.category}</td>
      <td
        className={`py-2 px-4 ${
          transaction.type === "income" ? "text-green-500" : "text-red-500"
        }`}
      >
        {transaction.amount.toLocaleString("ur-PK", CURRENCY_FORMAT_OPTIONS)}
      </td>
      <td className="py-2 px-4 capitalize">{transaction.type}</td>
    </tr>
  );
};

export default TransactionTableRow;
