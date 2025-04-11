import Link from "next/link";
import Image from "next/image";

export const Menu = () => {
  return (
    <>
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center items-center py-8 text-white gradient-r-box">
          <Link href="/" className="inline-block px-4 py-3 text-lg text-white z-10">
            <div className="relative w-[31px] h-[31px]">
                {/* Main image */}
                <Image
                  src="/assets/images/Rectangle 25.png"
                  alt="link"
                  width={31}
                  height={31}
                  className="w-[31px]"
                />

                {/* Small overlay image */}
                <Image
                  src="/images/summary.png" // change this to your actual small image path
                  alt="icon"
                  width={25}
                  height={14}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>
          </Link>
          <Link href="/staking" className="inline-block px-4 py-3 text-lg text-white z-10">
            <div className="relative w-[31px] h-[31px]">
                  {/* Main image */}
                  <Image
                    src="/assets/images/Rectangle 25.png"
                    alt="link"
                    width={31}
                    height={31}
                    className="w-[31px]"
                  />

                  {/* Small overlay image */}
                  <Image
                    src="/images/staking.png" // change this to your actual small image path
                    alt="icon"
                    width={25}
                    height={24}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
            </div>
          </Link>
          <Link href="/bridge" className="inline-block px-4 py-3 text-lg text-white z-10">
            <div className="relative w-[31px] h-[31px]">
              {/* Main image */}
              <Image
                src="/assets/images/Rectangle 25.png"
                alt="link"
                width={31}
                height={31}
                className="w-[31px]"
              />

              {/* Small overlay image */}
              <Image
                src="/images/bridge.png" // change this to your actual small image path
                alt="icon"
                width={25}
                height={15.09}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </Link>
          <Link href="/paw_token_info" className="inline-block px-4 py-3 text-lg text-white z-10">
          <div className="relative w-[31px] h-[31px]">
              {/* Main image */}
              <Image
                src="/assets/images/Rectangle 25.png"
                alt="link"
                width={31}
                height={31}
                className="w-[31px]"
              />

              {/* Small overlay image */}
              <Image
                src="/images/token_info.png" // change this to your actual small image path
                alt="icon"
                width={22.34}
                height={25}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </Link>
          <Link href="/paw_wallet_naming_service" className="inline-block px-4 py-3 text-lg text-white z-10">
          <div className="relative w-[31px] h-[31px]">
              {/* Main image */}
              <Image
                src="/assets/images/Rectangle 25.png"
                alt="link"
                width={31}
                height={31}
                className="w-[31px]"
              />

              {/* Small overlay image */}
              <Image
                src="/images/wallet_name.png" // change this to your actual small image path
                alt="icon"
                width={25}
                height={17.31}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </Link>
          <Link href="/paw_swap" className="inline-block px-4 py-3 text-lg text-white z-10">
          <div className="relative w-[31px] h-[31px]">
              {/* Main image */}
              <Image
                src="/assets/images/Rectangle 25.png"
                alt="link"
                width={31}
                height={31}
                className="w-[31px]"
              />

              {/* Small overlay image */}
              <Image
                src="/images/swap.png" // change this to your actual small image path
                alt="icon"
                width={21}
                height={19}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </Link>
          <Link href="/treasury" className="inline-block px-4 py-3 text-lg text-white z-10">
          <div className="relative w-[31px] h-[31px]">
              {/* Main image */}
              <Image
                src="/assets/images/Rectangle 25.png"
                alt="link"
                width={31}
                height={31}
                className="w-[31px]"
              />

              {/* Small overlay image */}
              <Image
                src="/images/treasury.png" // change this to your actual small image path
                alt="icon"
                width={25}
                height={19}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </Link>
          <Link href="/total_value_locked" className="inline-block px-4 py-3 text-lg text-white z-10">
          <div className="relative w-[31px] h-[31px]">
              {/* Main image */}
              <Image
                src="/assets/images/Rectangle 25.png"
                alt="link"
                width={31}
                height={31}
                className="w-[31px]"
              />

              {/* Small overlay image */}
              <Image
                src="/images/locked.png" // change this to your actual small image path
                alt="icon"
                width={18}
                height={25}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </Link>  
        </div>
      </div>
      <div className="hidden md:block lg:hidden fixed left-1/2 top -translate-x-1/2 -translate-y-3/4">
        <div className="flex flex-row justify-center items-center px-8 text-white gradient-r-box1">
            <Link href="/" className="inline-block px-3 py-2 text-lg text-white z-10">
              <Image
                src="/assets/images/Rectangle 25.png"
                width="25"
                alt="link"
                height="25"
                className="w-[25px]"
              />
            </Link>
            <Link href="/staking" className="inline-block px-3 py-2 text-lg text-white z-10">
              <Image
                src="/assets/images/Rectangle 25.png"
                width="25"
                alt="link"
                height="25"
                className="w-[25px]"
              />
            </Link>
            <Link href="/bridge" className="inline-block px-3 py-2 text-lg text-white z-10">
              <Image
                src="/assets/images/Rectangle 25.png"
                width="25"
                alt="link"
                height="25"
                className="w-[25px]"
              />
            </Link>
            <Link href="/paw_token_info" className="inline-block px-3 py-2 text-lg text-white z-10">
              <Image
                src="/assets/images/Rectangle 25.png"
                width="25"
                alt="link"
                height="25"
                className="w-[25px]"
              />
            </Link>
            <Link href="/paw_wallet_naming_service" className="inline-block px-3 py-2 text-lg text-white z-10">
              <Image
                src="/assets/images/Rectangle 25.png"
                width="25"
                alt="link"
                height="25"
                className="w-[25px]"
              />
            </Link>
            <Link href="/paw_swap" className="inline-block px-3 py-2 text-lg text-white z-10">
              <Image
                src="/assets/images/Rectangle 25.png"
                width="25"
                alt="link"
                height="25"
                className="w-[25px]"
              />
            </Link>
            <Link href="/treasury" className="inline-block px-3 py-2 text-lg text-white z-10">
              <Image
                src="/assets/images/Rectangle 25.png"
                width="25"
                alt="link"
                height="25"
                className="w-[25px]"
              />
            </Link>
            <Link href="/total_value_locked" className="inline-block px-3 py-2 text-lg text-white z-10">
              <Image
                src="/assets/images/Rectangle 25.png"
                width="25"
                alt="link"
                height="25"
                className="w-[25px]"
              />
            </Link>  
        </div>
      </div>
    </>
  );
};
