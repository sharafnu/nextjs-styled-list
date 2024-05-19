import React from 'react';
import Layout from './layout';
import StyledList from './StyledList';
import PlainList from './PlainList';
import { Transaction } from './types'; // Ensure the correct path

const transactions: Transaction[] = [
  {
    id: 1,
    name: 'Burger King',
    category: 'Food & drink',
    categoryColor: 'bg-green-100 text-green-800 border border-green-500',
    amount: -12.38,
    date: '16 July',
    time: '18:43',
    logo: 'https://www.freepnglogos.com/uploads/picture-logo-png/burger-king-fast-food-picture-logo-7.png',
    carbonEmission: 12.6,
  },
  {
    id: 2,
    name: 'ESSO',
    category: 'Car',
    categoryColor: 'bg-yellow-100 text-yellow-800 border border-yellow-500',
    amount: -58.11,
    date: '16 July',
    time: '12:05',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Esso-Logo.svg/2560px-Esso-Logo.svg.png',
    carbonEmission: 7.3,
  },
  {
    id: 3,
    name: 'Primark',
    category: 'Fashion',
    categoryColor: 'bg-pink-100 text-pink-800 border border-pink-500',
    amount: -12.83,
    date: '16 July',
    time: '09:34',
    logo: 'https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/c3/26/81/c32681c7-b9f3-29c1-db18-b22f96eb874a/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg',
    carbonEmission: 23.7,
  },
  {
    id: 4,
    name: 'Starbucks',
    category: 'Food & drink',
    categoryColor: 'bg-green-100 text-green-800 border border-green-500',
    amount: -4.38,
    date: '16 July',
    time: '08:29',
    logo: 'https://www.freepnglogos.com/uploads/starbucks-coffe-logo-hd-image-15.png',
    carbonEmission: 3.7,
  },
  {
    id: 5,
    name: "McDonald's",
    category: 'Food & drink',
    categoryColor: 'bg-green-100 text-green-800 border border-green-500',
    amount: -8.99,
    date: '15 July',
    time: '18:12',
    logo: 'https://www.freepnglogos.com/uploads/fries-png/fries-product-nutrition-details-mcdonald-oman-35.png',
    carbonEmission: 17.3,
  },
  {
    id: 6,
    name: 'Booking.com',
    category: 'Travel',
    categoryColor: 'bg-blue-100 text-blue-800 border border-blue-500',
    amount: -132.39,
    date: '15 July',
    time: '14:02',
    logo: 'https://1000logos.net/wp-content/uploads/2021/05/Booking.Com-logo.png',
    carbonEmission: 78.3,
  },
  {
    id: 7,
    name: 'TESCO',
    category: 'Groceries',
    categoryColor: 'bg-purple-100 text-purple-800 border border-purple-500',
    amount: -105.43,
    date: '15 July',
    time: '11:17',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Tesco_Logo.svg/2560px-Tesco_Logo.svg.png',
    carbonEmission: 37.9,
  },
];

const groupedTransactions = transactions.reduce((groups, transaction) => {
  const date = transaction.date;
  if (!groups[date]) {
    groups[date] = [];
  }
  groups[date].push(transaction);
  return groups;
}, {} as Record<string, Transaction[]>);


const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 font-sans">
        <div className="flex justify-around">
          <div className="mobile-frame">
            <StyledList transactions={transactions} groupedTransactions={groupedTransactions}/>
          </div>
          <div className="mobile-frame">
            <PlainList transactions={transactions} groupedTransactions={groupedTransactions} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
