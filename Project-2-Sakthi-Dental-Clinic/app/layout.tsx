import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sakthi Dental Clinic | Specialized Dental Care",
  description:
    "Sakthi Dental Clinic provides compassionate and expert-led dental care for women, children and families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800 antialiased">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}