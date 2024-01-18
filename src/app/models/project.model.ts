export interface ProjectModel {
  id: number;
  name: string;
  technologies: string;
  description: string;
  link: ProjectLinkModel;
  team?: string;
  duration?: string;
  tasks: string[];
}

export interface ProjectLinkModel {
  title: string;
  url: string;
}
