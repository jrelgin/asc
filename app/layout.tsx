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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
