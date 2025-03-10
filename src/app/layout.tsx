import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import {
  ClerkProvider
} from "@clerk/nextjs";

const IBM_Plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Imaginity",
  description: "Ai image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/" appearance={{variables:{colorPrimary:'#ff6905'}}}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBM_Plex.variable)}>                 
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
