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

  it('show profile name', async () => {
    await render(HeroSectionComponent, {
      componentInputs: {
        profile
      }
    });

    expect(screen.getByRole('heading', { name: profile.fullName })).toBeTruthy();
  });

  it('show the role of the profile', async () => {
    await render(HeroSectionComponent, {
      componentInputs: {
        profile
      }
    });

    expect(screen.getByText(profile.role)).toBeTruthy();
  });

  it('show profile headline', async () => {
    await render(HeroSectionComponent, {
      componentInputs: {
        profile
      }
    });

    expect(screen.getByText(profile.headline)).toBeTruthy();
  });

  it('show profile summary', async () => {
    await render(HeroSectionComponent, {
      componentInputs: {
        profile
      }
    });

    expect(screen.getByText(profile.summary)).toBeTruthy();
  });
});
