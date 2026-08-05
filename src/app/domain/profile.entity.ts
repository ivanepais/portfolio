import { Contact } from '@domain/contact';
import { SocialLink } from '@domain/social-link';
import type {SocialPlatform} from '@domain/social-link';

export interface Profile {
  readonly fullName: string;
  readonly role: string;
  readonly headline: string;
  readonly summary: string;
  readonly avatarUrl?: string;
  readonly contact?: Contact[];
  readonly socialLinks?: readonly SocialLink[];
}