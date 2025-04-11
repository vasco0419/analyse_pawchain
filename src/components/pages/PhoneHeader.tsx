'use client';

import React, { useState } from "react";
import Image from "next/image"
import { useRouter } from 'next/navigation';

export const PhoneHeader = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  
  const showMenu = () => {
     console.log(showModal)
     setShowModal(!showModal); // Toggle menu visibility
  };

  return (
    <>
        <div className="md:hidden fixed top-0 left-0 w-full flex flex-row justify-between items-center px-4 py-2 bg-gradient-to-b from-[#162a52] to-[#162239] z-50">
            <Image
                className="h-[30px] w-[26px]"
                src="/images/Paw Chain logo.png"
                alt="Paw Chain Logo"
                width={26.34}
                height={39}
            />
        <div
            className="w-8 h-8 p-0.5 rounded-lg bg-gradient-to-r from-[#5851E8] to-[#D6D3FF]"
            onClick={showMenu}
        >
            <div className="flex items-center justify-center w-full h-full bg-[#021F6A] rounded-md">
            <svg className="w-6 h-6 text-[#5851E8]" fill="currentColor" viewBox="0 0 24 24">
                <rect x="4" y="6" width="16" height="2" rx="1" />
                <rect x="4" y="11" width="16" height="2" rx="1" />
                <rect x="4" y="16" width="16" height="2" rx="1" />
            </svg>
            </div>
        </div>

        {showModal && (
            <div className="mt-[48px] fixed inset-0 bg-opacity-10 flex items-center justify-center z-50 bg-gradient-to-br from-[#3B82F6]/80 to-[#FFFFFF]/70 backdrop-blur-sm">
                <div className="bg-[#021F6A] bg-opacity-70 shadow-lg h-full w-full relative border border-blue-400">
                    <div className="flex flex-row justify-center items-center p-2" onClick={() => router.push('/')}>
                        Summmary
                    </div>
                    <div className="flex flex-row justify-center items-center w-full">
                        <span className="w-full h-[1px] bg-blue-400"></span>
                    </div>
                    <div className="flex flex-row justify-center items-center p-2" onClick={() => router.push('/staking')}>
                        Staking
                    </div>
                    <div className="flex flex-row justify-center items-center w-full">
                        <span className="w-full h-[1px] bg-blue-400"></span>
                    </div>
                    <div className="flex flex-row justify-center items-center p-2" onClick={() => router.push('/bridge')}>
                        Bridges
                    </div>
                    <div className="flex flex-row justify-center items-center w-full">
                        <span className="w-full h-[1px] bg-blue-400"></span>
                    </div>
                    <div className="flex flex-row justify-center items-center p-2" onClick={() => router.push('/paw_token_info')}>
                        Paw Token
                    </div>
                    <div className="flex flex-row justify-center items-center w-full">
                        <span className="w-full h-[1px] bg-blue-400"></span>
                    </div>
                    <div className="flex flex-row justify-center items-center p-2" onClick={() => router.push('/paw_wallet_naming_service')}>
                        Wallet Name Service 
                    </div>
                    <div className="flex flex-row justify-center items-center w-full">
                        <span className="w-full h-[1px] bg-blue-400"></span>
                    </div>
                    <div className="flex flex-row justify-center items-center p-2" onClick={() => router.push('/paw_swap')}>
                        Paw Swap
                    </div>
                    <div className="flex flex-row justify-center items-center w-full">
                        <span className="w-full h-[1px] bg-blue-400"></span>
                    </div>
                    <div className="flex flex-row justify-center items-center p-2" onClick={() => router.push('/treasury')}>
                        Treasury
                    </div>
                    <div className="flex flex-row justify-center items-center w-full">
                        <span className="w-full h-[1px] bg-blue-400"></span>
                    </div>
                    <div className="flex flex-row justify-center items-center p-2" onClick={() => router.push('/total_value_locked')}>
                        Total Value Locked
                    </div>
                    <div className="flex flex-row justify-center items-center w-full">
                        <span className="w-full h-[1px] bg-blue-400"></span>
                    </div>
                </div>
            </div>
        )}
        </div>
        <div className="block md:hidden mb-4">

        </div>
    </>
)}

