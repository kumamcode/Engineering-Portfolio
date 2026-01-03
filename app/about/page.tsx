import Header from '@/components/Header';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      <Header />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Profile Picture and Basic Info */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 mx-auto md:mx-0 rounded-lg overflow-hidden">
                  <Image
                    src="/About Me/about_me_photo.jpg"
                    alt="Kuma McCraw"
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Kuma McCraw
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                  Mechanical Engineer
                </p>
                
                {/* Social Links */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <a
                    href="https://www.linkedin.com/in/kuma-mccraw/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://mccraw.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24h21.08V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                    </svg>
                    Substack
                  </a>
                  <a
                    href="mailto:kmccraw@college.harvard.edu"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                  <a
                    href="/About Me/Kuma_McCraw_Resume_Aug_2025.pdf"
                    download="Kuma_McCraw_Resume_Aug_2025.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-neutral-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                Welcome! My name is Kuma McCraw and I am a last semester Mechanical Engineering student at Harvard University.
                I am passionate about mechanical systems, robotics, consumer electronics, automation, electric vehicles.
                </p>
                <p>
                My projects span mechanical design, robotics, control systems, FEA, CFD, 
                data-analysis, software-development/AI, architecture, and wood design. With roots as a Bay Area hip-hop 
                music producer and skateboarder I seek to blend creativity and engineering to design innovative and beautiful solutions and technologies. 
                </p>
                <p>
                Outside of Engineering, I’m extremely passionate about International Travel, Personal Finance & Investing, 
                Technology Investing & VC, Real Estate, fitness, fashion, and music. I write about technology and startups 
                on my Substack so click the link above if you would like to hear my thoughts. 

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-800 border-t border-gray-200 dark:border-neutral-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Kuma McCraw's Engineering Portfolio
          </p>
        </div>
      </footer>
    </main>
  );
}

