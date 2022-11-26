import {
    Table,
    TableHead,
    TableHeadItem,
    TableRow,
    Tabledata,
} from "./TransactionHistory.styled";

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
                {transactions.map(({ type, amount, currency, id },i) => <TransactionHistoryItem
                    key={id}
                    transactionsType={type}
                    amount={amount}
                    currency={currency}
                    id={i += 1}
                />)}
            </tbody>
        </Table>
    )
};

export const TransactionHistoryItem = ({transactionsType,amount,currency,id}) => {
    return (<TableRow id={id}>
        <Tabledata>{transactionsType}</Tabledata>
        <Tabledata>{amount}</Tabledata>
        <Tabledata>{currency}</Tabledata>
    </TableRow>)
};