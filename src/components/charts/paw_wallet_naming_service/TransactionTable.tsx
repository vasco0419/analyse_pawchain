import React, { useEffect, useState } from 'react';

const TransactionTable = (props: any) => {
  const [ records, setRecords] = useState(props.data);

  const transcationNameShowLess = (str: string):string => {
    return str.substring(0, 5) + "....." + str.substring(str.length - 5, str.length);
  }

  const walletShowLess = (str: string):string => {
    return str.substring(0, 8) + "....." + str.substring(str.length - 5, str.length);
  }

  useEffect(() => {
    setRecords(props.data);
  }, [props])
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
        
        { records.map((record: any, index: number) => (
          <div key={index} className="flex flex-row justify-between items-center px-3 py-1">
              <a className="text-[13px] md:text-[16px] cursor-point click-box" href={`https://scanner.pawchain.net/tx/${record.txId}`}
                    style={{
                      background: 'linear-gradient(to right, #D3D6FF, #5851E8)',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                    }}>{transcationNameShowLess(record.txId)}</a>
              <span className="text-[13px] md:text-[16px]">{walletShowLess(record.walletAddress)}</span>
              <span className="text-[13px] md:text-[16px]">{record.walletName}</span>
          </div>  
        ))}
    </>
  );
};

export default TransactionTable;