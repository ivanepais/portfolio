import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { describe, beforeEach, afterEach, it, expect } from 'vitest';

import { PortfolioContentDto } from '../dtos/portfolio-content.dto';

import { JsonPortfolioContentAdapter } from './json-portfolio-content.adapter';

describe('JsonPortfolioContentAdapter', () => {
  let adapter: JsonPortfolioContentAdapter;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });

    adapter = TestBed.inject(JsonPortfolioContentAdapter);

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    TestBed.inject(HttpTestingController).verify();
  });

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

  it('debería realizar un GET al contenido del portfolio', async () => {
    const promise = adapter.getPortfolioContent();

    const request = httpTestingController.expectOne('assets/content/portfolio-content.json');

    expect(request.request.method).toBe('GET');

    request.flush(portfolioContentDto);

    const result = await promise;

    expect(result).toEqual({
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
          endDate: undefined,
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
    });
  });

  it('debería propagar un error HTTP', async () => {
    const promise = adapter.getPortfolioContent();

    const request = httpTestingController.expectOne('assets/content/portfolio-content.json');

    request.flush(null, {
      status: 500,
      statusText: 'Internal Server Error'
    });

    await expect(promise).rejects.toThrow();
  });
});
