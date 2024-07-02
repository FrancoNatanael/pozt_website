import type { Metadata } from "next";
import { Jost, EB_Garamond } from "next/font/google";
import "./globals.css"
import 'primeicons/primeicons.css';
import Nav from "@/components/nav/Nav";
import { PrimeReactProvider } from 'primereact/api';

const jost = Jost({ subsets: ["latin"], display:'swap' });
const eBGaramond = EB_Garamond({ subsets: ["latin"], display:'swap' });

export const metadata: Metadata = {
  title: "{ Pozt }",
  description: "Let run your creativity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeReactProvider value={{ unstyled: false }}>
      <html lang="en" className={jost.className}>
        <body className="w-4/5 m-auto">
        <Nav/>
          {children}
        </body>
      </html>
    </PrimeReactProvider>
  );
}
