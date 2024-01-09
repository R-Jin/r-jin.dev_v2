"use client";
import { inter, merriweather } from "@/ui/fonts";
import "@/ui/globals.css";

import Header from "@/ui/components/header/Header";
import Providers from "@/ui/components/Providers";

import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <div className="bg-background transition-colors duration-200 ease-linear">
            <Header />
            <AnimatePresence>{children}</AnimatePresence>
            {/* footer */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
