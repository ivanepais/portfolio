import { Component, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';
import { describe, expect, it } from 'vitest';

import { Profile } from '@domain/profile.entity';
import { SocialLink } from '@domain/social-link.entity';

import { BackToTopComponent } from '../sections/back-to-top.component';
import { PortfolioHeaderComponent } from '../sections/portfolio-header.component';

import { PortfolioLayoutComponent } from './portfolio-layout.component';

@Component({
  selector: 'app-portfolio-header',
  template: `
    <span data-testid="portfolio-header-stub">
      {{ profile.fullName }}
    </span>

    <span data-testid="portfolio-header-social-links">
      {{ socialLinks.length }}
    </span>
  `,
  standalone: true,
})
class PortfolioHeaderStubComponent {
  @Input({ required: true })
  profile!: Profile;

  @Input({ required: true })
  socialLinks!: readonly SocialLink[];
}

@Component({
  selector: 'app-back-to-top',
  template: '<span data-testid="back-to-top-stub"></span>',
  standalone: true,
})
class BackToTopStubComponent {}

@Component({
  selector: 'app-portfolio-layout-host',
  template: `
    <app-portfolio-layout
      [profile]="profile"
      [socialLinks]="socialLinks"
      [footerText]="footerText"
    >
      <p>Contenido proyectado</p>
    </app-portfolio-layout>
  `,
  standalone: true,
  imports: [PortfolioLayoutComponent],
})
class PortfolioLayoutHostComponent {
  @Input({ required: true })
  profile!: Profile;

  @Input({ required: true })
  socialLinks!: readonly SocialLink[];

  @Input({ required: true })
  footerText!: string;
}

describe('PortfolioLayoutComponent', () => {
  const profile: Profile = {
    fullName: 'Test User',
    role: 'Frontend Developer',
    headline: 'Test headline',
    summary: 'Test summary',
    avatarUrl: '/avatar.jpg',
  };

  const socialLinks: readonly SocialLink[] = [
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/test',
    },
  ];

  const footerText = '© 2026 Test User';

  it('debería componer el layout', async () => {
    TestBed.overrideComponent(PortfolioLayoutComponent, {
      remove: {
        imports: [
          PortfolioHeaderComponent,
          BackToTopComponent,
        ],
      },
      add: {
        imports: [
          PortfolioHeaderStubComponent,
          BackToTopStubComponent,
        ],
      },
    });

    await render(
      PortfolioLayoutHostComponent,
      {
        componentInputs: {
          profile,
          socialLinks,
          footerText,
        },
      },
    );

    expect(
      screen.getByTestId('portfolio-header-stub'),
    ).toBeTruthy();

    expect(
      screen.getByTestId('portfolio-header-stub').textContent,
    ).toContain(profile.fullName);

    expect(
      screen.getByTestId('portfolio-header-social-links').textContent,
    ).toContain(socialLinks.length.toString());

    expect(
      screen.getByTestId('back-to-top-stub'),
    ).toBeTruthy();

    expect(
      screen.getByText('Contenido proyectado'),
    ).toBeTruthy();

    expect(
      screen.getByText(footerText),
    ).toBeTruthy();
  });
});