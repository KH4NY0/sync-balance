import type { Metadata } from "next";
import React from "react";
import './globals.css'


export const metadata: Metadata = {
  title: "Sync Balance",
  description: "Sync Balance is a modern banking platform for everyone",
    icons: {
      icon: '/icons/logo.svg'
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >
        {children}
      </body>
    </html>
  );
}
