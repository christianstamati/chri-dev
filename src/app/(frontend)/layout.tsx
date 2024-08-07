import type { Metadata } from "next";
import "@/styles/globals.css";
import { geistMono, geistSans } from "@/fonts";

export const metadata: Metadata = {
  title: "Christian Stamati — Fullstack Developer",
  description: "On a mission to build products people love",
  icons: [{ rel: "icon", url: "/static/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
