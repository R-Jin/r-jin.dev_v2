import { inter, merriweather } from "@/ui/fonts";
import "@/ui/globals.css";

import Header from "@/ui/components/header/Header";
import Providers from "@/ui/components/Providers";

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
          <Header />
          <main className="bg-background">{children}</main>
          {/* footer */}
        </Providers>
      </body>
    </html>
  );
}
