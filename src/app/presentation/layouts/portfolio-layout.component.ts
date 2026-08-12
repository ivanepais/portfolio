/*
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="portfolio-layout">
      <header class="portfolio-layout__header">
        <a class="portfolio-layout__brand" href="#top">
          {{ brand }}
        </a>

        <nav
          class="portfolio-layout__nav"
          aria-label="Navegación principal"
        >
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <main class="portfolio-layout__main">
        <ng-content />
      </main>

      <footer class="portfolio-layout__footer">
        <p>© 2026 {{ brand }}. Todos los derechos reservados.</p>
      </footer>
    </div>
  `,
})
export class PortfolioLayoutComponent {
  @Input({ required: true })
  brand!: string;
}
*/


/*
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { PortfolioNavItem } from '../models/portfolio-nav-item.model';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-8 lg:px-10"
      id="top"
    >
      <header class="mb-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <a class="text-lg font-semibold tracking-tight text-slate-950 dark:text-slate-50"
          href="#top">
          {{ brand }}
        </a>

        <nav class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600 dark:text-slate-300" aria-label="Navegación principal">
          @for (item of navItems; track item.href) {
            <a class="transition-colors hover:text-slate-950 dark:hover:text-slate-50">
              {{ item.label }}
            </a>
          }
        </nav>
      </header>

      <main class="flex-1 space-y-24">
        <ng-content />
      </main>

      <footer class="mt-16 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p>{{ footerText }}</p>
      </footer>
    </div>
  `,
})
export class PortfolioLayoutComponent {
  @Input({ required: true })
  brand!: string;

  @Input({ required: true })
  navItems!: readonly PortfolioNavItem[];

  @Input({ required: true })
  footerText!: string;
}
*/

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { PortfolioNavItem } from '../models/portfolio-nav-item.model';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      id="top"
      class="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 text-text sm:px-8 lg:px-10"
    >
      <header class="mb-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <a
          class="text-lg font-semibold tracking-tight text-text"
          href="#top"
        >
          {{ brand }}
        </a>

        <nav
          class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted"
          aria-label="Navegación principal"
        >
          @for (item of navItems; track item.href) {
            <a
              class="transition-colors hover:text-text"
              [href]="item.href"
            >
              {{ item.label }}
            </a>
          }
        </nav>
      </header>

      <main class="flex-1 space-y-24">
        <ng-content />
      </main>

      <footer class="mt-16 border-t border-border pt-6 text-sm text-muted">
        <p>{{ footerText }}</p>
      </footer>
    </div>
  `,
})
export class PortfolioLayoutComponent {
  @Input({ required: true })
  brand!: string;

  @Input({ required: true })
  navItems!: readonly PortfolioNavItem[];

  @Input({ required: true })
  footerText!: string;
}
