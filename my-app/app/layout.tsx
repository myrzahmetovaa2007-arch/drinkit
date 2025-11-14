import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-50 antialiased`}
      >
        <div className="flex">
          {/* SIDEBAR */}
          <aside className="w-64 h-screen bg-white shadow-lg p-6 fixed left-0 top-0 flex flex-col gap-6">
            <h1 className="text-2xl font-bold mb-4">My Website</h1>

            <nav className="flex flex-col gap-3 text-lg">
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>

              <Link href="/about" className="hover:text-blue-600 transition">
                About
              </Link>

              <Link href="/services" className="hover:text-blue-600 transition">
                Services
              </Link>

              <Link href="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>

              <Link href="/dashboard" className="hover:text-blue-600 transition">
                Dashboard
              </Link>
            </nav>
          </aside>

          {/* PAGE CONTENT */}
          <main className="ml-64 w-full p-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
