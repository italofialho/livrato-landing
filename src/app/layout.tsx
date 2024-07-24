import type { Metadata } from "next";
import { League_Spartan as LeagueSpartan } from "next/font/google";
import "the-new-css-reset/css/reset.css";
import StyledComponentsRegistry from "@/lib/registry";

const leagueSpartan = LeagueSpartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Livrato Capital",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />

      <body className={leagueSpartan.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
