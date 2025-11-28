import projectsData from '@/data/projects.json';

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  thumbnail?: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  features: string[];
};

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id) as Project | undefined;
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === '전체') {
    return getAllProjects();
  }
  return projectsData.filter((project) => project.category === category) as Project[];
}

export function getFeaturedProjects(limit: number = 3): Project[] {
  return projectsData.slice(0, limit) as Project[];
}

