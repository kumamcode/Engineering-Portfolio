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
      <body className="antialiased bg-gray-50 dark:bg-neutral-900">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('darkMode');
                const shouldBeDark = stored ? stored === 'true' : true;
                if (shouldBeDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}

