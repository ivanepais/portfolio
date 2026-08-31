import { render, screen } from '@testing-library/angular';
import { describe, expect, it } from 'vitest';

import { Profile } from '@domain/profile.entity';
import { SocialLink } from '@domain/social-link.entity';

import { PortfolioHeaderComponent } from './portfolio-header.component';

describe('PortfolioHeaderComponent', () => {
  const profile: Profile = {
    fullName: 'Test User',
    role: 'Frontend Developer',
    headline: 'Test headline',
    summary: 'Test summary',
    avatarUrl: '/avatar.jpg'
  };

  const profileWithoutAvatar: Profile = {
    ...profile,
    avatarUrl: undefined
  };

  const socialLinks: readonly SocialLink[] = [
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/test'
    },
    {
      platform: 'email',
      label: 'Email',
      url: 'test@example.com'
    }
  ];

  const emptySocialLinks: readonly SocialLink[] = [];

  it('display header information', async () => {
    await render(PortfolioHeaderComponent, {
      componentInputs: {
        profile,
        socialLinks
      }
    });

    const avatar = screen.getByRole('img', {
      name: profile.fullName
    });

    expect(avatar.getAttribute('src')).toBe(profile.avatarUrl);

    const githubLink = screen.getByRole('link', {
      name: socialLinks[0].label
    });

    expect(githubLink.getAttribute('href')).toBe(socialLinks[0].url);

    const emailLink = screen.getByRole('link', {
      name: socialLinks[1].label
    });

    expect(emailLink.getAttribute('href')).toBe(`mailto:${socialLinks[1].url}`);

    const cvLink = screen.getByRole('link', {
      name: 'CV'
    });

    expect(cvLink.getAttribute('href')).toBe('../../../assets/public/documents/cv.pdf');
  });

  it('do not show the avatar when it does not exist', async () => {
    await render(PortfolioHeaderComponent, {
      componentInputs: {
        profile: profileWithoutAvatar,
        socialLinks
      }
    });

    expect(
      screen.queryByRole('img', {
        name: profile.fullName
      })
    ).toBeNull();
  });

  it('do not display social media profiles or your CV when there are no links.', async () => {
    await render(PortfolioHeaderComponent, {
      componentInputs: {
        profile,
        socialLinks: emptySocialLinks
      }
    });

    expect(
      screen.queryByRole('navigation', {
        name: 'Social Networks'
      })
    ).toBeNull();

    expect(
      screen.queryByRole('link', {
        name: 'CV'
      })
    ).toBeNull();
  });
});
