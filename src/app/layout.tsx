import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import { WagmiProvider } from './providers/WagmiProvider'
import { QueryProvider } from './providers/QueryProvider'
import { Header } from '@/components/Header'
import { Content } from '@/components/Content'
import { Toaster } from "@/components/ui/toaster"

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Obol test app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <QueryProvider>
          <WagmiProvider>
            <Header />

            <Content>
              {children}
            </Content>

            <Toaster />
          </WagmiProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
