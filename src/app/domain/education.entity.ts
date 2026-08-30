export interface Education {
  readonly id: string;
  readonly institution: string;
  readonly degree: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly summary?: string;
  readonly featured: boolean;
}
