import "./globals.css";

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import { getStore } from "@/actions/get-store";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { CurrencyProvider } from "@/providers/currency-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const store = await getStore();
  return (
    <html lang="en">
      <body className={cn(urbanist.className, "min-h-screen flex flex-col")}>
        <ModalProvider />
        <ToastProvider />
        <CurrencyProvider currency={store.currency} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
