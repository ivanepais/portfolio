import { describe, expect, it, vi } from 'vitest';

import {
  PortfolioContent,
  PortfolioContentPort,
} from '../ports/portfolio-content.port';

import { GetPortfolioContentUseCase } from './get-portfolio-content.use-case';

describe('GetPortfolioContentUseCase', () => {
  it('debería obtener el contenido a través del puerto', async () => {
  	const portfolioContent: PortfolioContent = {
	  	profile: {
		    fullName: 'Test User',
		    role: 'Frontend Developer',
		    headline: 'Test headline',
		    summary: 'Test summary',
		  },

		  projects: [
		    {
		      id: 'project-1',
		      title: 'Test Project',
		      description: 'Test project description',
		      technologies: ['Angular'],
		      featured: true,
		    },
		  ],

		  skills: [
		    {
		      id: 'skill-1',
		      name: 'Angular',
		      featured: true,
		    },
		  ],

		  experiences: [
		    {
		      id: 'experience-1',
		      company: 'Test Company',
		      role: 'Frontend Developer',
		      startDate: '2024-01',
		      summary: 'Test experience summary',
		      featured: true,
		    },
		  ],

		  education: [
		    {
		      id: 'education-1',
		      institution: 'Test University',
		      degree: 'Computer Science',
		      startDate: '2020-01',
		      endDate: '2024-01',
		      featured: true,
		    },
		  ],

		  socialLinks: [
		    {
		      platform: 'github',
		      label: 'GitHub',
		      url: 'https://github.com/test',
		    },
		  ],

		  contact: {
		    email: 'test@example.com',
		    availableForWork: true,
		  },
		};

    const getPortfolioContent = vi.fn().mockResolvedValue(
      portfolioContent,
    );

    const portfolioContentPort: PortfolioContentPort = {
      getPortfolioContent,
    };

    const useCase = new GetPortfolioContentUseCase(
      portfolioContentPort,
    );

    const result = await useCase.execute();

    expect(result).toBe(portfolioContent);
    expect(getPortfolioContent).toHaveBeenCalledOnce();
  });

  it('debería propagar el error del puerto', async () => {
	  const error = new Error('Error al obtener el portfolio');

	  const getPortfolioContent = vi
	    .fn()
	    .mockRejectedValue(error);

	  const portfolioContentPort: PortfolioContentPort = {
	    getPortfolioContent,
	  };

	  const useCase = new GetPortfolioContentUseCase(
	    portfolioContentPort,
	  );

	  await expect(useCase.execute()).rejects.toBe(error);
	});
});