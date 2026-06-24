import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roshan Gurumurthy",
  description:
    "Developer and researcher. CS and Math at WashU, building AI search infrastructure at Schaeffler.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistMono.variable} ${GeistMono.className}`}>
      <body>{children}</body>
    </html>
  );
}
