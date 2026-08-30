import { render, screen } from '@testing-library/angular';
import { describe, expect, it } from 'vitest';

import { Project } from '@domain/project.entity';

import { ProjectsSectionComponent } from './projects-section.component';

describe('ProjectsSectionComponent', () => {
  const projects: readonly Project[] = [
    {
      id: 'project-1',
      title: 'Project One',
      description: 'Project description',
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
  ];

  const projectWithoutLinks: Project = {
    id: 'project-2',
    title: 'Project Without Links',
    description: 'Project without repository or demo',
    technologies: ['Angular'],
    featured: false
  };

  const emptyProjects: readonly Project[] = [];

  it('debería mostrar los datos del proyecto', async () => {
    await render(ProjectsSectionComponent, {
      componentInputs: {
        projects
      }
    });

    expect(
      screen.getByRole('heading', {
        name: projects[0].title
      })
    ).toBeTruthy();

    expect(screen.getByText(projects[0].description)).toBeTruthy();

    expect(screen.getByText(projects[0].technologies.join(' · '))).toBeTruthy();

    const repositoryLink = screen.getByRole('link', {
      name: projects[0].repository!.label
    });

    expect(repositoryLink.getAttribute('href')).toBe(projects[0].repository!.url);

    const demoLink = screen.getByRole('link', {
      name: projects[0].demo!.label
    });

    expect(demoLink.getAttribute('href')).toBe(projects[0].demo!.url);
  });

  it('no debería mostrar los links opcionales cuando no existen', async () => {
    await render(ProjectsSectionComponent, {
      componentInputs: {
        projects: [projectWithoutLinks]
      }
    });

    expect(screen.queryByRole('link', { name: 'GitHub' })).toBeNull();

    expect(screen.queryByRole('link', { name: 'Demo' })).toBeNull();
  });

  it('no debería mostrar proyectos cuando la colección está vacía', async () => {
    await render(ProjectsSectionComponent, {
      componentInputs: {
        projects: emptyProjects
      }
    });

    expect(
      screen.queryByRole('heading', {
        name: projects[0].title
      })
    ).toBeNull();
  });
});
