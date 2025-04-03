import Link from "next/link";
import React from "react";
import "./globals.css"; // Import Tailwind CSS

export const metadata = {
  title: 'Our Community',
  description: 'Work for yourself, not by yourself.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="mb-8 py-4 border-b border-gray-200">
          <nav className="flex gap-6 items-center">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 font-medium px-3 py-2 rounded-md hover:bg-blue-50 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/posts" 
              className="text-blue-600 hover:text-blue-800 font-medium px-3 py-2 rounded-md hover:bg-blue-50 transition-colors"
            >
              Posts
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
