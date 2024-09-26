import axios from "axios";

interface Transaction {
  date?: string;
  amount: number;
  type: "income" | "expense";
  category: string;
}

const baseUrl =
  "https://personal-finance-tracker-production.up.railway.app/api/v1/transactions";

const getTokenFromLocalStorage = () => {
  const storedToken = localStorage.getItem("token");
  return storedToken ? `Bearer ${JSON.parse(storedToken)}` : "";
};

const addTransaction = async (transaction: Transaction) => {
  try {
    const token = getTokenFromLocalStorage();
    if (!token) throw new Error("Authorization token is missing.");

    const config = {
      headers: {
        Authorization: token
      }
    };
    const response = await axios.post(baseUrl, transaction, config);
    return response.data;
  } catch (error) {
    console.log("Error Adding Transaction", error);
  }
};

const fetchAllTransactions = async () => {
  try {
    const token = getTokenFromLocalStorage();
    if (!token) throw new Error("Authorization token is missing.");
    const config = {
      headers: {
        Authorization: token
      }
    };
    const response = await axios.get(baseUrl, config);
    return response.data;
  } catch (error) {
    console.log("Error Fetching Transactions", error);
  }
};

export default {
  addTransaction,
  fetchAllTransactions
};
