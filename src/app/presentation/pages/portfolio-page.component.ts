import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioFacade } from '../services/portfolio.facade';
import { PortfolioContent } from '@application/ports/portfolio-content.port';

import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';

import { HeroSectionComponent } from '../sections/hero-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section.component';
import { SkillsSectionComponent } from '../sections/skills-section.component';
import { ContactSectionComponent } from '../sections/contact-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioLayoutComponent,
    HeroSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    @if (content(); as portfolio) {
      <app-portfolio-layout
        [profile]="portfolio.profile"
        [socialLinks]="portfolio.socialLinks"
        [footerText]="footerText"
      >
        <app-hero-section [profile]="portfolio.profile" />
        <app-contact-section
          [contact]="portfolio.contact"
        />
        <app-projects-section [projects]="portfolio.projects" />
        <app-skills-section [skills]="portfolio.skills" />
      </app-portfolio-layout>
    } @else {
      <p>Cargando portfolio...</p>
    }
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  readonly footerText = '© 2026 Tu Nombre. Todos los derechos reservados.';

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}
