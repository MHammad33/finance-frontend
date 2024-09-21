export type Transaction = {
	date: string;
	description: string;
	amount: number;
	type: "income" | "expense";
	category: string;
};
