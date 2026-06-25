import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata: Metadata = {
  title: "ALLOR RAIN // Advanced Weather Engineering Systems",
  description: "Advanced precipitation generation and weather intelligence systems designed for sovereign water security in arid and drought-prone regions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased bg-[#0b132b] text-slate-100 overflow-x-hidden">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

