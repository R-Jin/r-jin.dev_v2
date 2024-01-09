"use client";
import { inter, merriweather } from "@/ui/fonts";
import "@/ui/globals.css";

import Header from "@/ui/components/header/Header";
import Providers from "@/ui/components/Providers";

import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/ui/components/footer/Footer";
import { usePathname } from "next/navigation";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  // exitState: { opacity: 0, x: 0, y: -50 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
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
            <motion.main
              key={pathname}
              initial="hidden"
              animate="enter"
              variants={variants}
              transition={{
                type: "linear",
                duration: 0.2,
              }}
            >
              {children}
            </motion.main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
