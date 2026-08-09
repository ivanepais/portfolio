import { Contact } from '@domain/contact.entity';
import { SocialLink } from '@domain/social-link.entity';

export interface Profile {
  readonly fullName: string;
  readonly role: string;
  readonly headline: string;
  readonly summary: string;
  readonly avatarUrl?: string;
  readonly contact?: Contact;
  readonly socialLinks?: readonly SocialLink[];
}