import "./globals.css";

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/providers/modal-provider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(urbanist.className, "min-h-screen flex flex-col")}>
        <ModalProvider />
        {/* @ts-expect-error Server Component */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
