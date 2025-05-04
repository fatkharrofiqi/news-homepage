import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/static/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/static/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/static/Inter-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
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
        <main className="px-4">{children}</main>
      </body>
    </html>
  );
}
