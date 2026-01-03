'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white dark:bg-neutral-800 shadow-sm sticky top-0 z-10 border-b border-gray-200 dark:border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Kuma McCraw's Engineering Portfolio</h1>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/"
                className={`px-3 py-2 rounded font-medium transition-colors ${
                  pathname === '/'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 rounded font-medium transition-colors ${
                  pathname === '/about'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                About
              </Link>
            </nav>
          </div>
          <ThemeToggle />
        </div>
        <nav className="md:hidden mt-4 flex gap-4">
          <Link
            href="/"
            className={`px-3 py-2 rounded font-medium transition-colors ${
              pathname === '/'
                ? 'text-green-600 dark:text-green-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`px-3 py-2 rounded font-medium transition-colors ${
              pathname === '/about'
                ? 'text-green-600 dark:text-green-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

