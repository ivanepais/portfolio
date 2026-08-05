export interface Contact {
  readonly id?: string;
  readonly email: string;
  readonly location?: string;
  readonly availableForWork: boolean;
  readonly timezone?: string;
}
