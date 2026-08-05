
export type SocialPlatformDto =
  | 'github'
  | 'linkedin'
  | 'x'
  | 'instagram'
  | 'youtube'
  | 'website'
  | 'email';

export interface SocialLinkDto {
  readonly id?: string;
  readonly platform: SocialPlatformDto;
  readonly label: string;
  readonly url: string;
}

export interface ContactDto {
  readonly email: string;
  readonly location?: string;
  readonly availableForWork: boolean;
  readonly timezone?: string;
}

export interface ProfileDto {
  readonly fullName: string;
  readonly role: string;
  readonly headline: string;
  readonly summary: string;
  readonly avatarUrl?: string;
  readonly contact?: ContactDto;
  readonly socialLinks?: readonly SocialLinkDto[];

}

export interface ProjectLinkDto {
  readonly label: string;
  readonly url: string;
}

export interface ProjectDto {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageUrl?: string;
  readonly technologies: readonly string[];
  readonly repository?: ProjectLinkDto;
  readonly demo?: ProjectLinkDto;
  readonly featured: boolean;
}

export interface SkillDto {
  readonly id: string;
  readonly name: string;
  readonly category?: string;
  readonly level?: 'basic' | 'intermediate' | 'advanced';
  readonly featured: boolean;
}

export interface ExperienceDto {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly summary: string;
  readonly achievements?: readonly string[];
  readonly featured: boolean;
}

export interface EducationDto {
  readonly id: string;
  readonly institution: string;
  readonly degree: string;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly summary?: string;
  readonly featured: boolean;
}

export interface PortfolioContentDto {
  readonly profile: ProfileDto;
  readonly projects: readonly ProjectDto[];
  readonly skills: readonly SkillDto[];
  readonly experiences: readonly ExperienceDto[];
  readonly education: readonly EducationDto[];
  readonly socialLinks?: readonly SocialLinkDto[];
  readonly contact?: ContactDto;
}