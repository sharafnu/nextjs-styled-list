export interface Transaction {
    id: number;
    name: string;
    category: string;
    categoryColor: string;
    amount: number;
    date: string;
    time: string;
    logo: string;
    carbonEmission: number;
}

export type GroupedTransactions = Record<string, Transaction[]>;


export interface ListProps {
    transactions: Transaction[];
    groupedTransactions: GroupedTransactions;
}

