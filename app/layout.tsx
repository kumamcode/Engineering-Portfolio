import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kuma McCraw's Engineering Portfolio",
  description: "Mechanical Engineering Projects - Robotics & CAD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}

