import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jelyn Betco | Personal Site",
  description: "A personal site built with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <nav className="bg-zinc-100 border-b border-zinc-200 sticky top-0 z-50">
          <div className="max-w-3xl mx-auto px-6 py-3">
            <Link
              href="/"
              className="font-bold text-xl text-zinc-900 hover:text-blue-600"
            >
              Jelyn Betco
            </Link>
            <div className="ml-auto flex gap-6 text-sm font-medium">
              <Link href="/" className="text-zinc-600 hover:text-zinc-900">
                Home
              </Link>
              <Link href="/about" className="text-zinc-600 hover:text-zinc-900">
                About
              </Link>
              <Link
                href="/projects"
                className="text-zinc-600 hover:text-zinc-900"
              >
                Projects
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
