import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "@/provider";
import Layout from "@/components/layout";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
  leftNav
}: Readonly<{
  children: React.ReactNode,
  leftNav:React.ReactNode
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <AuthProvider> 
          <Providers>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
              <section className="flex">
                {leftNav}
                
              <main className=" w-full py-10 px-8 bg-gray-300">
                <Layout/>
                {children}
              </main>
              </section>
              
            </body>
          </Providers>
        </AuthProvider>
      </ClerkProvider>
    </html>
  );
}
