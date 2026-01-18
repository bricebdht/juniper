import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Juniper",
  description: "A city-by-city social guide for digital nomads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}

