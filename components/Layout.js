// fonts
import { Sora } from "@next/font/google";
import { Suspense, useEffect } from "react";

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// components
import Nav from "../components/Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-[#1D1D1D] text-white  bg-cover bg-no-repeat ${sora.variable} font-sora relative `}
    >
      <TopLeftImg />
      <Nav />
      <Header />

      {children}
    </div>
  );
};

export default Layout;
