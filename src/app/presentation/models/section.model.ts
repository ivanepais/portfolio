export type SectionId =
  | 'hero'
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'education'
  | 'contact';

export interface Section {
  readonly id: SectionId;
  readonly title: string;
  readonly visible: boolean;
}