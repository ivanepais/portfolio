/*
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioFacade } from '../services/portfolio.facade';
import { PortfolioContent } from '@application/ports/portfolio-content.port';
import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';
import { HeroSectionComponent } from '../sections/hero-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [CommonModule, PortfolioLayoutComponent, HeroSectionComponent],
  template: `
    @if (content(); as portfolio) {
      <app-portfolio-layout [brand]="portfolio.profile.fullName">
        <app-hero-section [profile]="portfolio.profile" />
      </app-portfolio-layout>
    } @else {
      <p>Cargando portfolio...</p>
    }
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}
*/

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioFacade } from '../services/portfolio.facade';
import { PortfolioContent } from '@application/ports/portfolio-content.port';

import { PortfolioLayoutComponent } from '../layouts/portfolio-layout.component';
import { PortfolioNavItem } from '../models/portfolio-nav-item.model';

import { HeroSectionComponent } from '../sections/hero-section.component';
import { AboutSectionComponent } from '../sections/about-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section.component';
import { SkillsSectionComponent } from '../sections/skills-section.component';
import { ExperienceSectionComponent } from '../sections/experience-section.component';
import { EducationSectionComponent } from '../sections/education-section.component';
import { ContactSectionComponent } from '../sections/contact-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioLayoutComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    @if (content(); as portfolio) {
      <app-portfolio-layout
        [brand]="portfolio.profile.fullName"
        [navItems]="navItems"
        [footerText]="footerText"
      >
        <app-hero-section [profile]="portfolio.profile" />
        <app-about-section [profile]="portfolio.profile" />
        <app-projects-section [projects]="portfolio.projects" />
        <app-skills-section [skills]="portfolio.skills" />
        <app-experience-section [experiences]="portfolio.experiences" />
        <app-education-section [educationList]="portfolio.education" />
        <app-contact-section
          [contact]="portfolio.contact"
          [socialLinks]="portfolio.socialLinks"
        />
      </app-portfolio-layout>
    } @else {
      <p>Cargando portfolio...</p>
    }
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  readonly navItems: readonly PortfolioNavItem[] = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Educación', href: '#education' },
    { label: 'Contacto', href: '#contact' },
  ];

  readonly footerText = '© 2026 Tu Nombre. Todos los derechos reservados.';

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}
