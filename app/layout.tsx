import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProAPIs - Enterprise-Grade APIs for Data-Centric Projects",
  description: "At ProAPIs, we provide highly available, reliable, and affordable data APIs for data-centric projects.",
  openGraph: {
    images: ['/og-cover.png'],
    title:"WebSharper",
    description:"At ProAPIs, we provide highly available, reliable, and affordable data APIs for data-centric projects.",
    url:"https://proapis.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body className={inter.className}>{children}</body>

    </html>
  );
}
