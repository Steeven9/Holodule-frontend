import Menu from "@/components/Menu";
import TimeBar from "@/components/TimeBar";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holodule",
  description: "Custom view for Hololive schedule",
};

export const viewport: Viewport = {
  themeColor: "#87cefa",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-8 py-6 min-h-screen bg-main`}>
        <main className="mb-2">
          <div className="py-2">
            <div className="text-2xl mb-2">Holodule</div>
            <Menu />
            <TimeBar />
          </div>

          {children}
        </main>

        <footer className="text-center">
          &copy;{new Date().getFullYear()}{" "}
          <Link href="https://soulsbros.ch" className="link" target="_blank">
            Soulsbros
          </Link>
          {" - "}
          <Link
            href="https://github.com/Steeven9/holodule-frontend"
            target="_blank"
            className="link"
          >
            GitHub
          </Link>{" "}
          - API data from{" "}
          <Link
            href="https://schedule.hololive.tv"
            className="link"
            target="_blank"
          >
            Hololive
          </Link>
          <br />
          This website is not affiliated in any way with COVER Corp. We do not
          offer any correctness nor availability guarantees.
        </footer>
      </body>
    </html>
  );
}
