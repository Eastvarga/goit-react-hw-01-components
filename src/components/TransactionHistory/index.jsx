import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
TransactionHistory.defaultProps = {
  items: [
    {
      type: "no type",
      amount: "undefined",
      currency: "undefined",
    },
  ],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired)
    .isRequired,
};
export default TransactionHistory;
