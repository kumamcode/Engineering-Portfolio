import ProjectGallery from '@/components/ProjectGallery';
import { projects } from '@/data/projects';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProjectGallery projects={projects} />
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

