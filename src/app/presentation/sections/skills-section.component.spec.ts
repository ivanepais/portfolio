import { render, screen } from '@testing-library/angular';
import { describe, expect, it } from 'vitest';

import { Skill } from '@domain/skill.entity';

import { SkillsSectionComponent } from './skills-section.component';

describe('SkillsSectionComponent', () => {
  const skills: readonly Skill[] = [
    {
      id: 'skill-1',
      name: 'Angular',
      featured: true,
    },
    {
      id: 'skill-2',
      name: 'TypeScript',
      featured: false,
    },
  ];

  const emptySkills: readonly Skill[] = [];

  it('debería mostrar las skills recibidas', async () => {
    await render(SkillsSectionComponent, {
      componentInputs: {
        skills,
      },
    });

    expect(screen.getByText('Angular')).toBeTruthy();
    expect(screen.getByText('TypeScript')).toBeTruthy();
  });

  it('no debería mostrar skills cuando la colección está vacía', async () => {
    await render(SkillsSectionComponent, {
      componentInputs: {
        skills: emptySkills,
      },
    });

    expect(screen.queryByText('Angular')).toBeNull();
  });
});