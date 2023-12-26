import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <>
      <div className="flex justify-between p-5 border w-full px-64">
        <div>
          <div className="flex justify-items-start">
            <p className="pr-2">
              <Link href="/">logo</Link>
            </p>
            <p className="pr-2">
              <Link href="/">Home</Link>
            </p>
            <p className="pr-2">
              <Link href="/menu">Menu</Link>
            </p>
            <p className="pr-2">
              <Link href="/">Contact</Link>
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
        <p className="pr-2">
          <Link href="">Cart</Link>
        </p>
        </div>
      </div>
    </>
  );
}

export default NavBar;