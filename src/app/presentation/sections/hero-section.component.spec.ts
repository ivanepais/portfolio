import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/angular';

import { Profile } from '@domain/profile.entity';

import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  const profile: Profile = {
    fullName: 'Test User',
    role: 'Frontend Developer',
    headline: 'Test headline',
    summary: 'Test summary'
  };

  it('debería mostrar el nombre del perfil', async () => {
    await render(HeroSectionComponent, {
      componentInputs: {
        profile
      }
    });

    expect(screen.getByRole('heading', { name: profile.fullName })).toBeTruthy();
  });

  it('debería mostrar el rol del perfil', async () => {
    await render(HeroSectionComponent, {
      componentInputs: {
        profile
      }
    });

    expect(screen.getByText(profile.role)).toBeTruthy();
  });

  it('debería mostrar el headline del perfil', async () => {
    await render(HeroSectionComponent, {
      componentInputs: {
        profile
      }
    });

    expect(screen.getByText(profile.headline)).toBeTruthy();
  });

  it('debería mostrar el resumen del perfil', async () => {
    await render(HeroSectionComponent, {
      componentInputs: {
        profile
      }
    });

    expect(screen.getByText(profile.summary)).toBeTruthy();
  });
});
