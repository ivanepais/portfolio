/*
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Project } from '@domain/project.entity';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects-section">
      <h2 class="projects-section__title">Proyectos</h2>

      <div class="projects-section__list">
        @for (project of projects; track project.id) {
          <article class="projects-section__item">
            <h3 class="projects-section__item-title">
              {{ project.title }}
            </h3>

            <p class="projects-section__item-description">
              {{ project.description }}
            </p>

            <p class="projects-section__item-technologies">
              {{ project.technologies.join(' · ') }}
            </p>

            <div class="projects-section__item-links">
              @if (project.repository) {
                <a [href]="project.repository.url" target="_blank" rel="noreferrer">
                  {{ project.repository.label }}
                </a>
              }

              @if (project.demo) {
                <a [href]="project.demo.url" target="_blank" rel="noreferrer">
                  {{ project.demo.label }}
                </a>
              }
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class ProjectsSectionComponent {
  @Input({ required: true }) projects!: readonly Project[];
}

*/

/*
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Project } from '@domain/project.entity';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects">
      <h2>Proyectos</h2>

      <p>Total: {{ projects.length }}</p>
    </section>
  `,
})
export class ProjectsSectionComponent {
  @Input({ required: true })
  projects!: readonly Project[];
}
*/

/*
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Project } from '@domain/project.entity';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects">
      <h2>Proyectos</h2>

      <div>
        @for (project of projects; track project.id) {
          <article>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class ProjectsSectionComponent {
  @Input({ required: true })
  projects!: readonly Project[];
}

*/

/*
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Project } from '@domain/project.entity';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects">
      <h2>Proyectos</h2>

      <div>
        @for (project of projects; track project.id) {
          <article>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <p>{{ project.technologies.join(' · ') }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class ProjectsSectionComponent {
  @Input({ required: true })
  projects!: readonly Project[];
}
*/

/*
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Project } from '@domain/project.entity';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects">
      <h2>Proyectos</h2>

      <div>
        @for (project of projects; track project.id) {
          <article>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <p>{{ project.technologies.join(' · ') }}</p>

            @if (project.repository) {
              <a [href]="project.repository.url" target="_blank" rel="noreferrer">
                {{ project.repository.label }}
              </a>
            }
          </article>
        }
      </div>
    </section>
  `,
})
export class ProjectsSectionComponent {
  @Input({ required: true })
  projects!: readonly Project[];
}
*/

/*
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Project } from '@domain/project.entity';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects">
      <h2>Proyectos</h2>

      <div>
        @for (project of projects; track project.id) {
          <article>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <p>{{ project.technologies.join(' · ') }}</p>

            @if (project.repository) {
              <a [href]="project.repository.url" target="_blank" rel="noreferrer">
                {{ project.repository.label }}
              </a>
            }

            @if (project.demo) {
              <a [href]="project.demo.url" target="_blank" rel="noreferrer">
                {{ project.demo.label }}
              </a>
            }
          </article>
        }
      </div>
    </section>
  `,
})
export class ProjectsSectionComponent {
  @Input({ required: true })
  projects!: readonly Project[];
}
*/


/*
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Project } from '@domain/project.entity';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="scroll-mt-24 py-12 sm:py-16 lg:py-20">      
      <div class="max-w-5xl">

        <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-slate-50">
          Proyectos
        </h2>

        <div class="mt-8 grid gap-6 md:grid-cols-2">
          @for (project of projects; track project.id) {
          
            <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <h3 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                {{ project.title }}
              </h3>

              <p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {{ project.description }}
              </p>

              <p class="mt-4 text-sm text-slate-500 dark:text-slate-500">
                {{ project.technologies.join(' · ') }}
              </p>

              <div class="mt-6 flex flex-wrap gap-3">
                @if (project.repository) {
                  <a [href]="project.repository.url" 
                    rget="_blank" 
                    rel="noreferrer"
                    class="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200"
                  >
                    {{ project.repository.label }}
                  </a>
                }

                @if (project.demo) {
                  <a [href]="project.demo.url" 
                    target="_blank" 
                    rel="noreferrer"
                    class="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-50"
                  >
                    {{ project.demo.label }}
                  </a>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsSectionComponent {
  @Input({ required: true })
  projects!: readonly Project[];
}

*/


import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Project } from '@domain/project.entity';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="projects"
      class="scroll-mt-24 py-12 sm:py-16 lg:py-20"
    >
      <div class="max-w-5xl">
        <h2
          class="text-2xl font-semibold tracking-tight text-text sm:text-3xl"
        >
          Proyectos
        </h2>

        <div class="mt-8 grid gap-6 md:grid-cols-2">
          @for (project of projects; track project.id) {
            <article
              class="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3
                class="text-xl font-semibold tracking-tight text-text"
              >
                {{ project.title }}
              </h3>

              <p
                class="mt-3 text-sm leading-6 text-muted"
              >
                {{ project.description }}
              </p>

              <p
                class="mt-4 text-sm text-muted"
              >
                {{ project.technologies.join(' · ') }}
              </p>

              <div class="mt-6 flex flex-wrap gap-3">
                @if (project.repository) {
                  <a
                    [href]="project.repository.url"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-surface transition-opacity hover:opacity-90"
                  >
                    {{ project.repository.label }}
                  </a>
                }

                @if (project.demo) {
                  <a
                    [href]="project.demo.url"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-background"
                  >
                    {{ project.demo.label }}
                  </a>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsSectionComponent {
  @Input({ required: true })
  projects!: readonly Project[];
}