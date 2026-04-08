export type ProjectCategory = 'Robotics' | 'CAD' | 'Mechanical Design' | 'Data Analysis' | 'Software/AI' | 'All';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  images: string[]; // Paths to images in public/projects/
  technologies?: string[];
  date?: string;
  githubUrl?: string; // GitHub repository URL
  links?: Array<{ label: string; href: string }>;
}

