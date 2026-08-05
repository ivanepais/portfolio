export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly category?: string;
  readonly level?: 'basic' | 'intermediate' | 'advanced';
  readonly featured: boolean;
}