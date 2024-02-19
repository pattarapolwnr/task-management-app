"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = (): React.JSX.Element => {
  const pathname = usePathname();
  return (
    <div className=" absolute top-[210px] z-30 flex h-24 w-full items-center justify-center">
      <nav className="my-5 flex w-[270px] items-center justify-center rounded-3xl bg-littleGray bg-opacity-75 text-[13px] backdrop-blur-md md:w-[324px]">
        <ul className="flex flex-row items-center justify-center px-1 py-[15px]">
          <li>
            <Link
              href="/"
              className={`link ${
                pathname === "/"
                  ? "w-1/3 rounded-3xl bg-white px-6 py-3 md:w-16 md:px-8"
                  : "px-6 py-3 md:px-8"
              }`}
            >
              To-do
            </Link>
          </li>
          <li>
            <Link
              href="/doing"
              className={`link ${
                pathname === "/doing"
                  ? "w-1/3 rounded-3xl bg-white px-6 py-3 md:px-8"
                  : "px-6 py-3 md:px-8"
              }`}
            >
              Doing
            </Link>
          </li>
          <li>
            <Link
              href="/done"
              className={`link ${
                pathname === "/done"
                  ? "w-1/3 rounded-3xl bg-white px-6 py-3 md:px-8"
                  : "px-6 py-3 md:px-8"
              }`}
            >
              Done
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
