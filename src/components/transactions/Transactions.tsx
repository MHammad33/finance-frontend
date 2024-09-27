import { useState } from "react";
import TransactionForm from "./TransactionForm";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import TransactionHeader from "./TransactionHeader";
import ButtonSection from "./ButtonSection";
import TransactionTable from "./TransactionTable";

const Transactions: React.FC = () => {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  const [isTransactionFormVisible, setIsTransactionFormVisible] =
    useState(false);

  const toggleTransactionForm = () => {
    setIsTransactionFormVisible(prev => !prev);
  };

  if (!transactions) {
    return <>Loading...</>;
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
      <TransactionHeader />
      <ButtonSection
        isVisible={isTransactionFormVisible}
        onToggle={toggleTransactionForm}
      />

      {isTransactionFormVisible && (
        <TransactionForm
          closeTransactionForm={() => setIsTransactionFormVisible(false)}
        />
      )}

      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default Transactions;
