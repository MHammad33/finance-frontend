import transactionService from "@/services/transactionService";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "..";

interface Transaction {
	id: string;
	date: string;
	description: string;
	amount: number;
	type: "income" | "expense";
	category: string;
}

interface TransactionState {
	transactions: Transaction[];
}

const initialState: TransactionState = {
	transactions: [],
};

const transactionSlice = createSlice({
	name: "transactions",
	initialState,
	reducers: {
		addTransaction: (state, action: PayloadAction<Transaction>) => {
			state.transactions.push(action.payload);
		},
		setTransactions: (state, action: PayloadAction<Transaction[]>) => {
			state.transactions = action.payload;
		},
	},
});

export const { addTransaction, setTransactions } = transactionSlice.actions;

export const fetchAllTransactions = () => async (dispatch: AppDispatch) => {
	console.log("Fetching...");
	try {
		const transactions = await transactionService.fetchAllTransactions();
		dispatch(setTransactions(transactions));
	} catch (error) {
		console.error("Failed to fetch transactions", error);
	}
};

export default transactionSlice.reducer;
