/*
import { Component, Input } from '@angular/core';
import { render, screen } from '@testing-library/angular';
import { describe, expect, it, vi } from 'vitest';

import { PortfolioContent } from '@application/ports/portfolio-content.port';
import { PortfolioFacade } from '../services/portfolio.facade';

import { PortfolioPageComponent } from './portfolio-page.component';

import { TestBed } from '@angular/core/testing';

import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';
import { HeroSectionComponent } from '../sections/hero-section.component';
import { ContactSectionComponent } from '../sections/contact-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section.component';
import { SkillsSectionComponent } from '../sections/skills-section.component';

import { Profile } from '@domain/profile.entity';
import { SocialLink } from '@domain/social-link.entity';
import { Contact } from '@domain/contact.entity';
import { Project } from '@domain/project.entity';
import { Skill } from '@domain/skill.entity';

@Component({
  selector: 'app-portfolio-layout',
  template: `
    <span data-testid="portfolio-layout-profile">
      {{ profile.fullName }}
    </span>

    <span data-testid="portfolio-layout-social-links">
      {{ socialLinks.length }}
    </span>

    <span data-testid="portfolio-layout-footer-text">
      {{ footerText }}
    </span>

    <ng-content />
  `, 
  standalone: true,
})
class PortfolioLayoutStubComponent {
  @Input({ required: true })
  profile!: Profile;

  @Input({ required: true })
  socialLinks!: readonly SocialLink[];

  @Input({ required: true })
  footerText!: string;
}

@Component({
  selector: 'app-hero-section',
  template: `
    <span data-testid="hero-profile">
      {{ profile.fullName }}
    </span>
  `,
  standalone: true,
})
class HeroSectionStubComponent {
  @Input({ required: true })
  profile!: Profile;
}

@Component({
  selector: 'app-contact-section',
  template: `
    <span data-testid="contact-email">
      {{ contact.email }}
    </span>
  `,
  standalone: true,
})
class ContactSectionStubComponent {
  @Input({ required: true })
  contact!: Contact;
}

@Component({
  selector: 'app-projects-section',
  template: `
    <span data-testid="projects-count">
      {{ projects.length }}
    </span>
  `,
  standalone: true,
})
class ProjectsSectionStubComponent {
  @Input({ required: true })
  projects!: readonly Project[];
}

@Component({
  selector: 'app-skills-section',
  template: `
    <span data-testid="skills-count">
      {{ skills.length }}
    </span>
  `,
  standalone: true,
})
class SkillsSectionStubComponent {
  @Input({ required: true })
  skills!: readonly Skill[];
}

describe('PortfolioPageComponent', () => {
  const portfolioContent: PortfolioContent = {
    profile: {
      fullName: 'Test User',
      role: 'Frontend Developer',
      headline: 'Test headline',
      summary: 'Test summary',
      avatarUrl: '/avatar.jpg',
    },
    socialLinks: [
      {
        platform: 'github',
        label: 'GitHub',
        url: 'https://github.com/test',
      },
    ],
    contact: {
      email: 'test@example.com',
      location: 'Argentina',
      availableForWork: true,
    },
    projects: [],
    skills: [],
    experiences: [],
    education: [],
  };

  const portfolioFacadeStub = {
    load: vi.fn(),
  };

  it('debería mostrar el estado de carga inicialmente', async () => {
    portfolioFacadeStub.load.mockReturnValue(
      new Promise(() => {}),
    );

    const { fixture } = await render(PortfolioPageComponent, {
      detectChangesOnRender: false,
      providers: [
        {
          provide: PortfolioFacade,
          useValue: portfolioFacadeStub,
        },
      ],
    });

    fixture.detectChanges();

    expect(
      screen.getByText('Cargando portfolio...'),
    ).toBeTruthy();

    expect(
      portfolioFacadeStub.load,
    ).toHaveBeenCalledOnce();
  });

  it('debería mostrar el portfolio cuando la carga finaliza', async () => {
    portfolioFacadeStub.load.mockClear();

    portfolioFacadeStub.load.mockResolvedValue(
      portfolioContent,
    );

    TestBed.overrideComponent(PortfolioPageComponent, {
      remove: {
        imports: [
          PortfolioLayoutComponent,
          HeroSectionComponent,
          ContactSectionComponent,
          ProjectsSectionComponent,
          SkillsSectionComponent,
        ],
      },
      add: {
        imports: [
          PortfolioLayoutStubComponent,
          HeroSectionStubComponent,
          ContactSectionStubComponent,
          ProjectsSectionStubComponent,
          SkillsSectionStubComponent,
        ],
      },
    });

    await render(PortfolioPageComponent, {
      providers: [
        {
          provide: PortfolioFacade,
          useValue: portfolioFacadeStub,
        },
      ],
    });

    expect(
      screen.queryByText('Cargando portfolio...'),
    ).toBeNull();

    expect(
      portfolioFacadeStub.load,
    ).toHaveBeenCalledOnce();

    expect(
      screen.getByTestId('portfolio-layout-profile').textContent,
    ).toContain(portfolioContent.profile.fullName);

    expect(
      screen.getByTestId('portfolio-layout-social-links').textContent,
    ).toContain(
      portfolioContent.socialLinks.length.toString(),
    );    

    expect(
      screen.getByTestId('portfolio-layout-footer-text').textContent,
    ).toContain(
      '© 2026 Tu Nombre. Todos los derechos reservados.',
    );

    expect(
      screen.getByTestId('hero-profile').textContent,
    ).toContain(
      portfolioContent.profile.fullName,
    );

    expect(
      screen.getByTestId('contact-email').textContent,
    ).toContain(
      portfolioContent.contact.email,
    );

    expect(
      screen.getByTestId('projects-count').textContent,
    ).toContain(
      portfolioContent.projects.length.toString(),
    );

    expect(
      screen.getByTestId('skills-count').textContent,
    ).toContain(
      portfolioContent.skills.length.toString(),
    );
  });  
});
*/

import { Component, Input } from '@angular/core';
import { render, screen } from '@testing-library/angular';
import { describe, expect, it, vi } from 'vitest';

import { PortfolioContent } from '@application/ports/portfolio-content.port';
import { PortfolioFacade } from '../services/portfolio.facade';

import { PortfolioPageComponent } from './portfolio-page.component';

import { TestBed } from '@angular/core/testing';

import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';
import { HeroSectionComponent } from '../sections/hero-section.component';
import { ContactSectionComponent } from '../sections/contact-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section.component';
import { SkillsSectionComponent } from '../sections/skills-section.component';

import { Profile } from '@domain/profile.entity';
import { SocialLink } from '@domain/social-link.entity';
import { Contact } from '@domain/contact.entity';
import { Project } from '@domain/project.entity';
import { Skill } from '@domain/skill.entity';

@Component({
  selector: 'app-portfolio-layout',
  template: `
    <span data-testid="portfolio-layout-profile">
      {{ profile.fullName }}
    </span>

    <span data-testid="portfolio-layout-social-links">
      {{ socialLinks.length }}
    </span>

    <span data-testid="portfolio-layout-footer-text">
      {{ footerText }}
    </span>

    <ng-content />
  `, 
  standalone: true,
})
class PortfolioLayoutStubComponent {
  @Input({ required: true })
  profile!: Profile;

  @Input({ required: true })
  socialLinks!: readonly SocialLink[];

  @Input({ required: true })
  footerText!: string;
}

@Component({
  selector: 'app-hero-section',
  template: `
    <span data-testid="hero-profile">
      {{ profile.fullName }}
    </span>
  `,
  standalone: true,
})
class HeroSectionStubComponent {
  @Input({ required: true })
  profile!: Profile;
}

@Component({
  selector: 'app-contact-section',
  template: `
    <span data-testid="contact-email">
      {{ contact.email }}
    </span>
  `,
  standalone: true,
})
class ContactSectionStubComponent {
  @Input({ required: true })
  contact!: Contact;
}

@Component({
  selector: 'app-projects-section',
  template: `
    <span data-testid="projects-count">
      {{ projects.length }}
    </span>
  `,
  standalone: true,
})
class ProjectsSectionStubComponent {
  @Input({ required: true })
  projects!: readonly Project[];
}

@Component({
  selector: 'app-skills-section',
  template: `
    <span data-testid="skills-count">
      {{ skills.length }}
    </span>
  `,
  standalone: true,
})
class SkillsSectionStubComponent {
  @Input({ required: true })
  skills!: readonly Skill[];
}

describe('PortfolioPageComponent', () => {
  const portfolioContent: PortfolioContent = {
    profile: {
      fullName: 'Test User',
      role: 'Frontend Developer',
      headline: 'Test headline',
      summary: 'Test summary',
      avatarUrl: '/avatar.jpg',
    },
    socialLinks: [
      {
        platform: 'github',
        label: 'GitHub',
        url: 'https://github.com/test',
      },
    ],
    contact: {
      email: 'test@example.com',
      location: 'Argentina',
      availableForWork: true,
    },
    projects: [],
    skills: [],
    experiences: [],
    education: [],
  };

  const portfolioFacadeStub = {
    load: vi.fn(),
  };

  it('debería mostrar el estado de carga inicialmente', async () => {
    portfolioFacadeStub.load.mockReturnValue(
      new Promise(() => {}),
    );

    const { fixture } = await render(PortfolioPageComponent, {
      detectChangesOnRender: false,
      providers: [
        {
          provide: PortfolioFacade,
          useValue: portfolioFacadeStub,
        },
      ],
    });

    fixture.detectChanges();

    expect(
      screen.getByText('Cargando portfolio...'),
    ).toBeTruthy();

    expect(
      portfolioFacadeStub.load,
    ).toHaveBeenCalledOnce();
  });

  it('debería mostrar el portfolio cuando la carga finaliza', async () => {
    portfolioFacadeStub.load.mockClear();

    portfolioFacadeStub.load.mockResolvedValue(
      portfolioContent,
    );

    TestBed.overrideComponent(PortfolioPageComponent, {
      remove: {
        imports: [
          PortfolioLayoutComponent,
          HeroSectionComponent,
          ContactSectionComponent,
          ProjectsSectionComponent,
          SkillsSectionComponent,
        ],
      },
      add: {
        imports: [
          PortfolioLayoutStubComponent,
          HeroSectionStubComponent,
          ContactSectionStubComponent,
          ProjectsSectionStubComponent,
          SkillsSectionStubComponent,
        ],
      },
    });

    const { fixture } = await render(PortfolioPageComponent, {
      providers: [
        {
          provide: PortfolioFacade,
          useValue: portfolioFacadeStub,
        },
      ],
    });

    await fixture.whenStable();
    
    expect(
      screen.queryByText('Cargando portfolio...'),
    ).toBeNull();

    expect(
      portfolioFacadeStub.load,
    ).toHaveBeenCalledOnce();

    expect(
      screen.getByTestId('portfolio-layout-profile').textContent,
    ).toContain(portfolioContent.profile.fullName);

    expect(
      screen.getByTestId('portfolio-layout-social-links').textContent,
    ).toContain(
      portfolioContent.socialLinks.length.toString(),
    );    

    expect(
      screen.getByTestId('portfolio-layout-footer-text').textContent,
    ).toContain(
      '© 2026 Tu Nombre. Todos los derechos reservados.',
    );

    expect(
      screen.getByTestId('hero-profile').textContent,
    ).toContain(
      portfolioContent.profile.fullName,
    );

    expect(
      screen.getByTestId('contact-email').textContent,
    ).toContain(
      portfolioContent.contact.email,
    );

    expect(
      screen.getByTestId('projects-count').textContent,
    ).toContain(
      portfolioContent.projects.length.toString(),
    );

    expect(
      screen.getByTestId('skills-count').textContent,
    ).toContain(
      portfolioContent.skills.length.toString(),
    );
  });  
});
