import { FC, useCallback, useEffect, useMemo } from "react";
import IncomeChart from "../charts/IncomeChart";
import ExpensesChart from "../charts/ExpensesChart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import BudgetSection from "../BudgetSection";
import { fetchAllTransactions } from "@/store/slices/transactionSlice";
import { setLoading } from "@/store/slices/loadingSlice";
import RecentTransactions from "./RecentTransactions";
import Spinner from "../Spinner";

const Dashboard: FC = () => {
  const allTransactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );
  const isLoading = useSelector((state: RootState) => state.loading);

  const transactions = useMemo(
    () =>
      allTransactions &&
      [...allTransactions]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5),
    [allTransactions]
  );

  const dispatch = useDispatch<AppDispatch>();

  const loadTransactions = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      await dispatch(fetchAllTransactions());
    } catch (error) {
      console.error("Failed to fetch transactions", error);
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const hasTransactions = useMemo(
    () => transactions.length > 0,
    [transactions]
  );

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  useEffect(() => {
    console.log("Loading State:", isLoading);
    console.log("Transactions State:", allTransactions);
  }, [isLoading, allTransactions]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hasTransactions ? (
          <RecentTransactions transactions={transactions} />
        ) : (
          <p>No recent transactions to display.</p>
        )}

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
