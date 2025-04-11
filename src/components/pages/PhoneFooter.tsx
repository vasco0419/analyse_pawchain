import React from "react";
import Image from "next/image"

export const PhoneFooter = () => {
    return(
        <div className="md:hidden flex flex-row justify-center items-center mt-4">
            <Image
                className="h-[22px] w-[116px]"
                src="/assets/images/Paw Chain logo.png"
                alt="Paw Chain Logo"
                width={116}
                height={22}
                />
        </div>
    );

}