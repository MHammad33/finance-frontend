import { Transaction } from "@/types/transaction.type";
import { FC } from "react";
import TransactionTableHeader from "./TransactionTableHeader";
import TransactionTableRow from "./TransactionTableRow";

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: FC<TransactionTableProps> = ({ transactions }) => {
  return (
    <table className="min-w-full bg-white dark:bg-gray-800 mt-6">
      <TransactionTableHeader />
      <tbody>
        {transactions.map(transaction => (
          <TransactionTableRow key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
