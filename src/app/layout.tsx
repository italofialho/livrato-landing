import React from "react";

import type { Metadata } from "next";
import { League_Spartan as LeagueSpartan } from "next/font/google";

import StyledComponentsRegistry from "@/lib/registry";
import "the-new-css-reset/css/reset.css";

const leagueSpartan = LeagueSpartan({ subsets: ["latin"] });

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
  return (
    <html lang="pt-BR">
      <body className={leagueSpartan.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
