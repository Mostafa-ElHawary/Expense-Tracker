import React, { useContext } from "react";
import Transition from "./Transition";
import { GlobalContext } from "../Context/GlobalState";
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>

      <ul className="list">
        {transactions.map((transaction) => (
          <Transition key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
