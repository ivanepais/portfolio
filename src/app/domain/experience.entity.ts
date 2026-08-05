export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly summary: string;
  readonly achievements?: readonly string[];
  readonly featured: boolean;
}