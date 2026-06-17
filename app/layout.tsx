import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/page";

export const metadata: Metadata = {
  title: "PixelVault - Frontend Design & Animation Resources",
  description:
    "A curated collection of frontend design, animation, illustration, video and UI inspiration resources.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}