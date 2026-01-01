import ProjectGallery from '@/components/ProjectGallery';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900">Kuma McCraw's Engineering Portfolio</h1>
          <p className="mt-2 text-lg text-gray-600">
            Mechanical Engineering Projects - Robotics & CAD Design
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProjectGallery projects={projects} />
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Kuma McCraw's Engineering Portfolio
          </p>
        </div>
      </footer>
    </main>
  );
}

