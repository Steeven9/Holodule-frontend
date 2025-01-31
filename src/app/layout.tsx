import Menu from "@/components/Menu";
import TimeBar from "@/components/TimeBar";
import githubLogo from "@/img/githubLogo.png";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
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
          <div className="flex space-x-2 p-4 items-center justify-center">
            <p>
              &copy;{new Date().getFullYear()}{" "}
              <Link
                href="https://soulsbros.ch"
                target="_blank"
                className="link"
              >
                Soulsbros
              </Link>
            </p>
            <Link
              href="https://github.com/Steeven9/Holodule-frontend"
              target="_blank"
              className="hover:rotate-45 transition-all"
            >
              <Image src={githubLogo} width={32} alt="GitHub logo" />
            </Link>
          </div>

          <div className="text-sm">
            Data from{" "}
            <Link
              href="https://schedule.hololive.tv"
              target="_blank"
              className="link"
            >
              Hololive
            </Link>
            . This website is not affiliated in any way with COVER Corp. We do
            not offer any correctness nor availability guarantees.
          </div>
        </footer>
      </body>
    </html>
  );
}
