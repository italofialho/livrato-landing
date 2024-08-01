import React from "react";

import type { Metadata } from "next";
import { Lato, League_Spartan as LeagueSpartan } from "next/font/google";

import StyledComponentsRegistry from "@/lib/registry";
import "the-new-css-reset/css/reset.css";
import "./global.css";

const leagueSpartan = LeagueSpartan({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Livrato Capital",
  description: "",
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fonts = `${leagueSpartan.className} ${lato.variable}`;
  return (
    <html lang="pt-BR">
      <body className={fonts}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
