import BranchButtons from "@/components/BranchButtons";
import { TIMEZONE } from "@/lib/config";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holodule-frontend",
  description: "Custom view for Hololive schedule",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-8 py-6 min-h-screen`}>
        <main className="mb-2">
          <div className="mb-6 text-2xl">Holodule-frontend</div>

          <div className="mb-6">Current timezone: {TIMEZONE}</div>
          <BranchButtons />
          {children}
        </main>
        <footer>
          &copy;{new Date().getFullYear()}{" "}
          <a href="https://soulsbros.ch" className="link">
            Soulsbros
          </a>{" "}
          - API data from{" "}
          <a href="https://schedule.hololive.tv" className="link">
            Holodule
          </a>
          <br />
          This website is not affiliated in any way with COVER Corp. We do not
          offer any correctness nor availability guarantees.
        </footer>
      </body>
    </html>
  );
}
