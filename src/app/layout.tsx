import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RG_Spacious } from "./font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VASTOLYA.ART",
  description: "Anatoly Vasilev portfolio web-site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-100  ${RG_Spacious.className} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
