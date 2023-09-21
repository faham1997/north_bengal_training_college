import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "North Bengal Training College",
  description:
    "North Bengal Training College is a professional training institutein Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-blue-50">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
