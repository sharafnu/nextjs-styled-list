import React from 'react';
import { ListProps, Transaction } from './types'; // Path may vary based on your project structure
import Layout from './layout';

const StyledList: React.FC<ListProps> = ({ transactions, groupedTransactions }) => {
  return (
    
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Balance overview</h1>
        <div className=" p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium">Main account</span>
            <span className="text-xl font-semibold">3780.37 EUR</span>
          </div>
          {Object.entries(groupedTransactions).map(([date, transactions]) => (
            <div key={date} className="mb-6 ">
              <h2 className="text-sm font-semibold text-gray-500 mb-2">{date}</h2>
              {transactions.map((transaction: Transaction) => (
                    <div key={transaction.id} className="flex justify-between items-center bg-white p-3 rounded-lg shadow-custom-very-light mb-[0.2rem]">
                  <div className="flex items-center">
                    <img
                      src={transaction.logo}
                      alt={transaction.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="text-sm font-semibold text-gray-700">{transaction.name}</div>
                      <div className="flex items-center text-xs text-gray-500">
                        <span className='mt-1'>{transaction.time}</span>
                        <span className={`ml-2 inline-block px-2 mt-1 rounded text-[10px] ${transaction.categoryColor}`}>
                          {transaction.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">{transaction.amount} EUR</div>
                    <div className="text-[10px] flex items-center text-green-700">
                      <img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-green-leaf-icon-graphic-design-template-vector-png-image_3990505.jpg" alt="CO2" className="w-6 h-6" />
                      {transaction.carbonEmission} kg CO₂
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default StyledList;
