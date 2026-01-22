"use client";

import "./globals.css";
import { useState } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ✅ ADD INTER FONT (ONLY ADDITION)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // ✅ APPLY FONT HERE — NOTHING ELSE CHANGED
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col bg-[#f4f7f8]">
        <Navbar open={menuOpen} setOpen={setMenuOpen} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
