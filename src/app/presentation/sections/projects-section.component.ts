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
      class="scroll-mt-20"
    >
      <div class="mx-auto max-w-2xl">
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
                    class="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-background"
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