import type { Metadata } from "next";
import "@/styles/globals.css";
import { geistMono, geistSans } from "@/fonts";
import Header from "@/payload/blocks/global/header";
import Footer from "@/payload/blocks/global/footer";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <Header />
            {children}
            <Footer />
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
