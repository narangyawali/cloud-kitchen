import React from "react";

function NavBar() {
  return (
    <>
      <div className="flex justify-between p-5 border w-full px-64">
        <div>
          <div className="flex justify-items-start">
            <p className="pr-2">
              <a href="/">logo</a>
            </p>
            <p className="pr-2">
              <a href="/">Home</a>
            </p>
            <p className="pr-2">
              <a href="/">Menu</a>
            </p>
            <p className="pr-2">
              <a href="/">Contact</a>
            </p>
          </div>
        </div>
        <div className="flex ">

        <p className="pr-2">
          <a href="/login">Login</a>
        </p>
        <p className="pr-2">
          <a href="/register">Register</a>
        </p>
        <p className="pr-2">
          <a href="">Cart</a>
        </p>
        </div>
      </div>
    </>
  );
}

export default NavBar;
