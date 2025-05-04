import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

const inter = localFont({
  src: "../../public/fonts/static/Inter-Regular.ttf",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "News Homepage",
  description: "News Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen bg-white-page`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
