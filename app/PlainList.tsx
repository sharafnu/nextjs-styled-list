import React from 'react';
import { ListProps, Transaction } from './types'; // Path may vary based on your project structure
import Layout from './layout';

const PlainList: React.FC<ListProps> = ({ transactions, groupedTransactions }) => {
  return (
    
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Balance overview</h1>
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium">Main account</span>
            <span className="text-xl font-semibold">3780.37 EUR</span>
          </div>
          {Object.entries(groupedTransactions).map(([date, transactions]) => (
            <div key={date} className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 mb-2">{date}</h2>
              {transactions.map((transaction: Transaction) => (
                <div key={transaction.id} className="flex justify-between items-center py-2 border-b last:border-none">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-semibold text-gray-700">{transaction.name}</div>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{transaction.time}</span>                        
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">{transaction.amount} EUR</div>                    
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default PlainList;
