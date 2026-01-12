import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "VeriPro - Complete Blockchain Symbolic Executor",
  description: "Advanced formal verification for smart contracts. Exhaustively explore all execution paths, detect vulnerabilities, and mathematically prove correctness before deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
