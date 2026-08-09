import { InjectionToken } from '@angular/core';

import { Profile } from '@domain/profile.entity';
import { Project } from '@domain/project.entity';
import { Skill } from '@domain/skill.entity';
import { Experience } from '@domain/experience.entity';
import { Education } from '@domain/education.entity';
import { SocialLink } from '@domain/social-link.entity';
import { Contact } from '@domain/contact.entity';

export interface PortfolioContent {
  readonly profile: Profile;
  readonly projects: readonly Project[];
  readonly skills: readonly Skill[];
  readonly experiences: readonly Experience[];
  readonly education: readonly Education[];
  readonly socialLinks: readonly SocialLink[];
  readonly contact: Contact;
}

export interface PortfolioContentPort {
  getPortfolioContent(): Promise<PortfolioContent>;
}

export const PORTFOLIO_CONTENT_PORT = new InjectionToken<PortfolioContentPort>(
  'PORTFOLIO_CONTENT_PORT',
);