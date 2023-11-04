"use client";
import { useCookies } from "react-cookie";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [cookie, setCookie] = useState(false);
  const [cookies, removeCookie] = useCookies(["token"]);
  const router = useRouter();
  const path = usePathname();
  console.log(cookies["token"]);
  if (cookies["token" !== undefined]) {
    setCookie(true);
  }

  const logoutHandler = () => {
    removeCookie("token");
    router.replace("/login");
  };

  let navMenu =
    path === "/login" || path === "/register" ? (
      ""
    ) : (
      <div className="bg-gradient-to-r from-[#ba704f]  to-[#6c3428] flex justify-between items-center text-center px-[50px] py-[5px] text-yellow-50">
        <div className="logo">
          <Link href={"/"}>
            <span className="text-[#dfa878] font-bold text-3xl">B</span>log
          </Link>
        </div>
        <div className="flex justify-around w-[500px] align-middle text-lg">
          <Link href={"/"}>Home</Link>
          <Link href={"/dashboard/blogs"}>Blogs</Link>
          <Link href={"/dashboard/services"}>Services</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About</Link>
        </div>

        {cookie ? (
          <div className="flex justify-between items-center w-[20%]">
            <button
              onClick={logoutHandler}
              className=" bg-[#8b5a2e] py-1 px-4 text-white font-bold rounded hover:bg-[#9b6a40] duration-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center w-[20%]">
            <Link href={"/login"}>Login</Link>
          </div>
        )}
      </div>
    );

  return <>{navMenu}</>;
};

export default Page;
