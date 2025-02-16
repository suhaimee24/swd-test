"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./stylesheets/style.css";
import "./i18n";
import { store } from "./store";
import { Provider } from "react-redux";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
