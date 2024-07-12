import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavbarSmall from "./components/NavbarSmall";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Giwost",
  description: "Giwost Certification",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> <link rel="icon" href="/Logo.png"/></head>
      <body className={inter.className}>
      <div className="lg:block hidden">
            <Navbar />
          </div>
          <div className="lg:hidden block">
            <NavbarSmall />
          </div>
        {children}
        </body>
    </html>
  );
}
