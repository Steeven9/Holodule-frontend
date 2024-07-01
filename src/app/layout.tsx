import BranchButtons from "@/components/BranchButtons";
import Clock from "@/components/Clock";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holodule-frontend",
  description: "Custom view for Hololive schedule",
};

export const viewport: Viewport = {
  // themeColor: "#dc2626",
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
          <div className="text-2xl">Holodule-frontend</div>

          <div className="sticky top-0 mt-4 bg-main py-2">
            <Clock />
            <BranchButtons />
          </div>
          {children}
        </main>
        <footer>
          &copy;{new Date().getFullYear()}{" "}
          <Link href="https://soulsbros.ch" className="link">
            Soulsbros
          </Link>{" "}
          - API data from{" "}
          <Link href="https://schedule.hololive.tv" className="link">
            Holodule
          </Link>
          <br />
          This website is not affiliated in any way with COVER Corp. We do not
          offer any correctness nor availability guarantees.
        </footer>
      </body>
    </html>
  );
}