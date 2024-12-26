import type { Metadata } from "next";

import "./globals.css";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";

import { Archivo } from "next/font/google";
import GlobalContextProvider from "@/hooks/GlobalContextProvider";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Kuldeep Yadav || Portfolio",
  description: "Advanced Portfolio Created By Kuldeep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalContextProvider>
        <body
          className={`antialiased bg-stone-200 text-stone-900 dark:bg-black dark:text-white ${archivo.variable} font-sans `}
        >
          <Provider>
            <header>
              <Navbar />
            </header>
            {children}
          </Provider>
        </body>
      </GlobalContextProvider>
    </html>
  );
}
