export interface Contact {
  readonly email: string;
  readonly location?: string;
  readonly availableForWork: boolean;
  readonly timezone?: string;
}
