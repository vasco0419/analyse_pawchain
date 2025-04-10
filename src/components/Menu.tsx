import Link from "next/link";
import Image from "next/image";

export const Menu = () => {
  return (
    <>
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center items-center py-8 text-white gradient-r-box">
          <Link href="/" className="inline-block px-4 py-3 text-lg text-white z-10">
            <Image
              src="/assets/images/Rectangle 25.png"
              width="25"
              alt="link"
              height="25"
              className="w-[25px]"
            />
          </Link>
          <Link href="/staking" className="inline-block px-4 py-3 text-lg text-white z-10">
            <Image
              src="/assets/images/Rectangle 25.png"
              width="25"
              alt="link"
              height="25"
              className="w-[25px]"
            />
          </Link>
          <Link href="/bridge" className="inline-block px-4 py-3 text-lg text-white z-10">
            <Image
              src="/assets/images/Rectangle 25.png"
              width="25"
              alt="link"
              height="25"
              className="w-[25px]"
            />
          </Link>
          <Link href="/paw_token_info" className="inline-block px-4 py-3 text-lg text-white z-10">
            <Image
              src="/assets/images/Rectangle 25.png"
              width="25"
              alt="link"
              height="25"
              className="w-[25px]"
            />
          </Link>
          <Link href="/paw_wallet_naming_service" className="inline-block px-4 py-3 text-lg text-white z-10">
            <Image
              src="/assets/images/Rectangle 25.png"
              width="25"
              alt="link"
              height="25"
              className="w-[25px]"
            />
          </Link>
          <Link href="/paw_swap" className="inline-block px-4 py-3 text-lg text-white z-10">
            <Image
              src="/assets/images/Rectangle 25.png"
              width="25"
              alt="link"
              height="25"
              className="w-[25px]"
            />
          </Link>
          <Link href="/treasury" className="inline-block px-4 py-3 text-lg text-white z-10">
            <Image
              src="/assets/images/Rectangle 25.png"
              width="25"
              alt="link"
              height="25"
              className="w-[25px]"
            />
          </Link>
          <Link href="/total_value_locked" className="inline-block px-4 py-3 text-lg text-white z-10">
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
