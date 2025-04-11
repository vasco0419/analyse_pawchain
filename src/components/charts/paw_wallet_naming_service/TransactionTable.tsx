import React, { useState } from 'react';

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([
    { id: 'pawxg...0dEAd', wallet: 'pawxg...gzw', newName: 'asddd.paw' },
    { id: 'pawxe...0dEAd', wallet: 'pawxe...xzx', newName: 'dsaw.paw' },
    { id: 'pawxa...0dEAd', wallet: 'pawxa...0dAA', newName: 'abcws.paw' },
    { id: 'pawxc...0dEAd', wallet: 'pawxc...EgW', newName: 'aaawa.paw' },
    { id: 'pawxz...0dEAd', wallet: 'pawxz...0wgZ', newName: 'paaww.paw' },
    { id: 'pawxc...0dEAd', wallet: 'pawxc...sgw', newName: '7rrd.paw' },
    { id: 'pawxy...0dEAd', wallet: 'pawxy...e1zf', newName: 'keko.paw' },
    { id: 'pawxb...0dEAd', wallet: 'pawxb...0gZ', newName: 'joem.paw' },
    { id: 'pawxj...0dEAd', wallet: 'pawxj...hbgf', newName: 'samss.paw' },
    { id: 'pawxk...0dEAd', wallet: 'pawxk...7fk4', newName: 'iruea.paw' },
  ]);

  // const [sortOrder, setSortOrder] = useState('asc');
  // const handleSort = () => {
  //   const sortedTransactions = [...transactions].sort((a, b) => {
  //     if (sortOrder === 'asc') {
  //       return a.newName.localeCompare(b.newName);
  //     } else {
  //       return b.newName.localeCompare(a.newName);
  //     }
  //   });
  //   setTransactions(sortedTransactions);
  //   setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  // };

  return (
    <>
        <div className="flex flex-row justify-center items-center md:mb-4 mt-4">
            <span className="hidden md:block font-bold text-[24px] text-center">Last Wallet Name Transactions</span>
            <span className="block md:hidden font-bold text-[24px] text-center">Last Wallet<br></br> Name Transactions</span>
        </div>
        <div className="flex flex-row justify-center items-center mb-5 w-full">
          <span className="w-full h-[1px] bg-gradient-to-r from-[#5851E8] to-[#D6D3FF]"></span>
        </div>

        <div className="flex flex-row justify-between items-center px-3 py-1">
            <span className="font-bold text-[15px] md:text-[16px]">Transaction ID</span>
            <span className="font-bold text-[15px] md:text-[16px]">Wallet</span>
            <span className="font-bold text-[15px] md:text-[16px]">New Name</span>
        </div>
        
        { transactions.map((tx, index) => (
          <div key={index} className="flex flex-row justify-between items-center px-3 py-1">
              <span  className="text-[13px] md:text-[16px]"
                    style={{
                      background: 'linear-gradient(to right, #D3D6FF, #5851E8)',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                    }}> {tx.id} </span>
              <span className="text-[13px] md:text-[16px]">{tx.wallet}</span>
              <span className="text-[13px] md:text-[16px]">{tx.newName}</span>
          </div>  
        ))}
    </>
  );
};

export default TransactionTable;