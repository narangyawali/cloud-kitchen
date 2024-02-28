import Link from "next/link";
import React from "react";
import Image from "next/image";
import UserNav from "./userNav";

function NavBar() {
  return (
    <>
      <div className="flex justify-between p-5 border w-full px-64 items-center bg-gray-100 ">
        <div>
          <div className="flex justify-between items-center">
            <p className="pr-2">
              <Link href="/">
                {
                  // <Image src="/home.png" className="h-16" width="16" height="22"/>
                }
                <img src="/home.png" className="h-16" />
              </Link>
            </p>
            <p className="pr-2">
              <Link href="/">Home</Link>
            </p>
            <p className="pr-2">
              <Link href="/new-menu">Menu</Link>
            </p>
            <p className="pr-2">
              <Link href="/#contact">Contact</Link>
            </p>
          </div>
        </div>
        <div className="flex ">
          <p className="pr-2">
            <Link href="/login">Login</Link>
          </p>
          <p className="pr-2">
            <Link href="/register">Register</Link>
          </p>
          <UserNav />
        </div>
      </div>
    </>
  );
}

export default NavBar;
