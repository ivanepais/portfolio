import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Project } from '@domain/project.entity';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="scroll-mt-20">
      <div class="mx-auto max-w-2xl">
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          @for (project of projects; track project.id) {
            <article
              class="border-border bg-surface rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 class="text-text text-xl font-semibold tracking-tight">
                {{ project.title }}
              </h3>

              <p class="text-muted mt-3 text-sm leading-6">
                {{ project.description }}
              </p>

              <p class="text-muted mt-4 text-sm">
                {{ project.technologies.join(' · ') }}
              </p>

              <div class="mt-6 flex flex-wrap gap-3">
                @if (project.repository) {
                  <a
                    [href]="project.repository.url"
                    target="_blank"
                    rel="noreferrer"
                    class="border-border text-text hover:bg-background inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors"
                  >
                    {{ project.repository.label }}
                  </a>
                }

                @if (project.demo) {
                  <a
                    [href]="project.demo.url"
                    target="_blank"
                    rel="noreferrer"
                    class="border-border text-text hover:bg-background inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors"
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
  `
})
export class ProjectsSectionComponent {
  @Input({ required: true })
  projects!: readonly Project[];
}
