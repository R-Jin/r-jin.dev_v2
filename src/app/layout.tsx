import type { Metadata } from "next";
import { inter, merriweather } from "@/ui/fonts";
import "@/ui/globals.css";

import Header from "@/ui/components/header/Header";

export const metadata: Metadata = {
  title: "R-Jin.dev",
  description: "I am a computer science student based in Gothenburg, Sweden.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${inter.variable} antialiased`}
    >
      <body>
        <Header />
        {children}
        {/* footer */}
      </body>
    </html>
  );
}
