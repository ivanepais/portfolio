export interface ProjectLink {
  readonly label: string;
  readonly url: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageUrl?: string;
  readonly technologies: readonly string[];
  readonly repository?: ProjectLink;
  readonly demo?: ProjectLink;
  readonly featured: boolean;
}