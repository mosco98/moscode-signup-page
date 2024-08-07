import { geist } from "@/lib/font";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export const metadata: Metadata = {
  title: "Create account",
  description:
    "A signup page with an unconventional way of checking password criteria. Inspired by @leyeconnect"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
