import PropTypes from 'prop-types';
import {
  TableHistory,
  TableThead,
  TableRow,
  TableHead,
  TabelBody,
  TabelData,
} from './Transaction.styled';

export const Transaction = ({ items }) => {
  return (
    <TableHistory>
      <TableThead>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </TableRow>
      </TableThead>

      <TabelBody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TabelData>{item.type}</TabelData>
            <TabelData>{item.amount}</TabelData>
            <TabelData>{item.currency}</TabelData>
          </TableRow>
        ))}
      </TabelBody>
    </TableHistory>
  );
};

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
