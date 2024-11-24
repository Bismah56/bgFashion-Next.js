import type { Metadata } from "next";
import { Merienda } from "next/font/google";
import "./globals.css";
import Header from "../component/header"
import Footer from "@/component/footer";

const merienda_init = Merienda({
  subsets: ['latin'],
  weight: ['300', '600','800'],
  variable: '--font-merienda',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="max-w-screen-2xl mx-auto">
      <body className={merienda_init.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
