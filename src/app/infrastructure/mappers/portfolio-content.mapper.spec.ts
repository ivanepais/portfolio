import { describe, expect, it } from 'vitest';

import { PortfolioContentDto } from '../dtos/portfolio-content.dto';

import { PortfolioContentMapper } from './portfolio-content.mapper';

describe('PortfolioContentMapper', () => {
  const portfolioContentDto: PortfolioContentDto = {
    profile: {
      fullName: 'Test User',
      role: 'Frontend Developer',
      headline: 'Test headline',
      summary: 'Test summary',
      avatarUrl: '/avatar.jpg'
    },

    projects: [
      {
        id: 'project-1',
        title: 'Project One',
        description: 'Project description',
        imageUrl: '/project.jpg',
        technologies: ['Angular', 'TypeScript'],
        repository: {
          label: 'GitHub',
          url: 'https://github.com/test/project'
        },
        demo: {
          label: 'Demo',
          url: 'https://example.com/project'
        },
        featured: true
      }
    ],

    skills: [
      {
        id: 'skill-1',
        name: 'Angular',
        category: 'Frontend',
        level: 'advanced',
        featured: true
      }
    ],

    experiences: [
      {
        id: 'experience-1',
        company: 'Test Company',
        role: 'Frontend Developer',
        startDate: '2024-01',
        endDate: null,
        summary: 'Test experience summary',
        achievements: ['Achievement one'],
        featured: true
      }
    ],

    education: [
      {
        id: 'education-1',
        institution: 'Test University',
        degree: 'Computer Science',
        startDate: '2020-01',
        endDate: '2024-01',
        summary: 'Test education summary',
        featured: true
      }
    ],

    socialLinks: [
      {
        platform: 'github',
        label: 'GitHub',
        url: 'https://github.com/test'
      }
    ],

    contact: {
      email: 'test@example.com',
      location: 'Argentina',
      availableForWork: true,
      timezone: 'America/Argentina/Buenos_Aires'
    }
  };

  it('transform a PortfolioContentDto to PortfolioContent', () => {
    const result = PortfolioContentMapper.toDomain(portfolioContentDto);

    expect(result.profile).toEqual({
      fullName: 'Test User',
      role: 'Frontend Developer',
      headline: 'Test headline',
      summary: 'Test summary',
      avatarUrl: '/avatar.jpg'
    });

    expect(result.projects).toEqual([
      {
        id: 'project-1',
        title: 'Project One',
        description: 'Project description',
        imageUrl: '/project.jpg',
        technologies: ['Angular', 'TypeScript'],
        repository: {
          label: 'GitHub',
          url: 'https://github.com/test/project'
        },
        demo: {
          label: 'Demo',
          url: 'https://example.com/project'
        },
        featured: true
      }
    ]);

    expect(result.skills).toEqual([
      {
        id: 'skill-1',
        name: 'Angular',
        category: 'Frontend',
        level: 'advanced',
        featured: true
      }
    ]);

    expect(result.experiences).toEqual([
      {
        id: 'experience-1',
        company: 'Test Company',
        role: 'Frontend Developer',
        startDate: '2024-01',
        endDate: undefined,
        summary: 'Test experience summary',
        achievements: ['Achievement one'],
        featured: true
      }
    ]);

    expect(result.education).toEqual([
      {
        id: 'education-1',
        institution: 'Test University',
        degree: 'Computer Science',
        startDate: '2020-01',
        endDate: '2024-01',
        summary: 'Test education summary',
        featured: true
      }
    ]);

    expect(result.socialLinks).toEqual([
      {
        platform: 'github',
        label: 'GitHub',
        url: 'https://github.com/test'
      }
    ]);
  });

  const portfolioContentDtoWithoutOptionals: PortfolioContentDto = {
    ...portfolioContentDto,

    projects: [
      {
        id: 'project-2',
        title: 'Project Without Links',
        description: 'Project description',
        technologies: ['Angular'],
        featured: false
      }
    ],

    experiences: [
      {
        id: 'experience-2',
        company: 'Test Company',
        role: 'Frontend Developer',
        startDate: '2024-01',
        endDate: null,
        summary: 'Test experience summary',
        featured: false
      }
    ]
  };

  it('convert missing optional links to undefined', () => {
    const result = PortfolioContentMapper.toDomain(portfolioContentDtoWithoutOptionals);

    expect(result.projects[0].repository).toBeUndefined();
    expect(result.projects[0].demo).toBeUndefined();
    expect(result.experiences[0].endDate).toBeUndefined();
    expect(result.experiences[0].achievements).toBeUndefined();
  });

  const portfolioContentDtoWithEmptyCollections: PortfolioContentDto = {
    ...portfolioContentDto,
    projects: [],
    skills: [],
    experiences: [],
    education: [],
    socialLinks: []
  };

  it('preserve empty collections', () => {
    const result = PortfolioContentMapper.toDomain(portfolioContentDtoWithEmptyCollections);

    expect(result.projects).toEqual([]);
    expect(result.skills).toEqual([]);
    expect(result.experiences).toEqual([]);
    expect(result.education).toEqual([]);
    expect(result.socialLinks).toEqual([]);
  });
});
