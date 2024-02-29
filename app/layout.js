import { Inter } from "next/font/google";
import Image from "next/image"
import {Toaster} from "react-hot-toast"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Based Food	",
  description: "A Complete Solution For Home Based Food",
};

import NavBar from "@/components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
		<Toaster/>
        <NavBar />
        <div className="min-h-[75vh] bg-slate-100">{children}</div>
        <div className="border-t-2 bg-gray-200 flex justify-around min-h-44 items-center">
          <div>
            <img src="/home.png" className="h-24" />
            <p className="mt-4">
              Proudly Powered By{" "}
              <strong className="text-orange-400">Individuals</strong>
            </p>
          </div>
          <div className="text-center py-8 text-xl">
            © 2024 All rights reserved
          </div>
          <div className="flex flex-row ">
			<Image src="/facebook.svg" width="26" height="26"  />
			<Image src="/instagram.svg" width="24" height="24" className="mx-5"/>
			<Image src="/linkedin.svg" width="24" height="24" />
          </div>
        </div>
      </body>
    </html>
  );
}
