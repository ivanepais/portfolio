import { PortfolioContent } from '@application/ports/portfolio-content.port';
import { PortfolioContentDto } from '../dtos/portfolio-content.dto';

import { Contact } from '@domain/contact.entity';
import { Project, ProjectLink } from '@domain/project.entity';
import { SocialLink } from '@domain/social-link.entity';
import { Profile } from '@domain/profile.entity';
import { Skill } from '@domain/skill.entity';
import { Education } from '@domain/education.entity';
import { Experience } from '@domain/experience.entity';

export class PortfolioContentMapper {
  static toDomain(dto: PortfolioContentDto): PortfolioContent {
    profile: this.profile(dto.profile),
    projects: dto.projects.map((project) => this.project(project)),
    skills: dto.skills.map((skill) => this.skill(skill)),
    experiences: dto.experiences.map((experience) =>
      this.experience(experience),
    ),
    education: dto.education.map((education) => this.education(education)),
    socialLinks: dto.socialLinks.map((socialLink) =>
      this.socialLink(socialLink),
    ),
    contact: this.contact(dto.contact),
  }

  private static contact(dto: PortfolioContentDto['contact']): Contact {
    return {
      email: dto.email,
      location: dto.location,
      availableForWork: dto.availableForWork,
      timezone: dto.timezone,
    };
  }

  private static socialLink(
    dto: PortfolioContentDto['socialLinks'][number],
  ): SocialLink {
    return {
      platform: dto.platform,
      label: dto.label,
      url: dto.url,
    };
  }

  private static profile(dto: PortfolioContentDto['profile']): Profile {
    return {
      fullName: dto.fullName,
      role: dto.role,
      headline: dto.headline,
      summary: dto.summary,
      avatarUrl: dto.avatarUrl,
      contact: this.contact(dto.contact),
    };
  }

  private static projectLink(
    dto: NonNullable<PortfolioContentDto['projects'][number]['repository']>,
  ): ProjectLink {
    return {
      label: dto.label,
      url: dto.url,
    };
  }

  private static project(dto: PortfolioContentDto['projects'][number]): Project {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      imageUrl: dto.imageUrl,
      technologies: dto.technologies,
      repository: dto.repository ? this.projectLink(dto.repository) : undefined,
      demo: dto.demo ? this.projectLink(dto.demo) : undefined,
      featured: dto.featured,
    };
  }

  private static skill(dto: PortfolioContentDto['skills'][number]): Skill {
    return {
      id: dto.id,
      name: dto.name,
      category: dto.category,
      level: dto.level,
      featured: dto.featured,
    };
  }

  private static experience(
    dto: PortfolioContentDto['experiences'][number],
  ): Experience {
    return {
      id: dto.id,
      company: dto.company,
      role: dto.role,
      startDate: dto.startDate,
      endDate: dto.endDate ?? undefined,
      summary: dto.summary,
      achievements: dto.achievements,
      featured: dto.featured,
    };
  }

  private static education(
    dto: PortfolioContentDto['education'][number],
  ): Education {
    return {
      id: dto.id,
      institution: dto.institution,
      degree: dto.degree,
      startDate: dto.startDate,
      endDate: dto.endDate ?? undefined,
      summary: dto.summary,
      featured: dto.featured,
    };
  }
}