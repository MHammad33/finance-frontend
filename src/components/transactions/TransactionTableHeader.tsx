import { FC } from "react";

const TransactionTableHeader: FC = () => {
  return (
    <thead>
      <tr className="text-left border-b">
        <th className="py-2 px-4">Date</th>
        <th className="py-2 px-4">Description</th>
        <th className="py-2 px-4">Category</th>
        <th className="py-2 px-4">Amount</th>
        <th className="py-2 px-4">Type</th>
      </tr>
    </thead>
  );
};

export default TransactionTableHeader;
