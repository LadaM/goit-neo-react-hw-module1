import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (<table className={css.table}>
      <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      </thead>

      <tbody>
      {items.map(({ id, type, amount, currency }, index) => (
        <tr key={id}>
          <td className={index % 2 !== 0 && css.rowOdd}>
            {type && type.charAt(0).toUpperCase() + type.slice(1)}</td>
          <td className={index % 2 !== 0 && css.rowOdd}>{amount}</td>
          <td className={index % 2 !== 0 && css.rowOdd}>{currency}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;