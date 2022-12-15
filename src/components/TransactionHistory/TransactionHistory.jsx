import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeadItem,
  TableRow,
  Tabledata,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </TableHead>
      <tbody>
        {transactions.map(({ type, amount, currency, id }) => (
          <TableRow key={id}>
            <Tabledata>{type}</Tabledata>
            <Tabledata>{amount}</Tabledata>
            <Tabledata>{currency}</Tabledata>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
