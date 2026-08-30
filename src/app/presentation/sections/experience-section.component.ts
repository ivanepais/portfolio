/*
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Experience } from '@domain/experience.entity';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section 
      id="experience" class="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-slate-50">
        Experiencia
      </h2>

      <div class="mt-8 space-y-8">
        @for (experience of experiences; track experience.id) {

          <article class="border-l-2 border-slate-200 pl-6 dark:border-slate-800">

            <header class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                {{ experience.role }}
              </h3>

              <p class="mt-1 text-base font-medium text-slate-700 dark:text-slate-300">
                {{ experience.company }}
              </p>

              <p class="text-sm text-slate-500 dark:text-slate-400">
                {{ experience.startDate }}
                —
                {{ experience.endDate ?? 'Actualidad' }}
              </p>
            </header>

            <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400">
              {{ experience.summary }}
            </p>

            @if (experience.achievements?.length) {
              <ul class="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                @for (
                  achievement of experience.achievements;
                  track achievement
                ) {
                  <li>
                    {{ achievement }}
                  </li>
                }
              </ul>
            }

          </article>

        }
      </div>
    </section>
  `,
})
export class ExperienceSectionComponent {
  @Input({ required: true })
  experiences!: readonly Experience[];
}
*/

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Experience } from '@domain/experience.entity';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <div class="max-w-5xl">
        <h2 class="text-text text-2xl font-semibold tracking-tight sm:text-3xl">Experiencia</h2>

        <div class="mt-8 space-y-8">
          @for (experience of experiences; track experience.id) {
            <article class="border-border border-l-2 pl-6">
              <div
                class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <div>
                  <h3 class="text-text text-xl font-semibold tracking-tight">
                    {{ experience.role }}
                  </h3>

                  <p class="text-muted mt-1 text-base font-medium">
                    {{ experience.company }}
                  </p>
                </div>

                <p class="text-muted text-sm">
                  {{ experience.startDate }} —
                  {{ experience.endDate ?? 'Actualidad' }}
                </p>
              </div>

              <p class="text-muted mt-4 max-w-3xl text-base leading-7">
                {{ experience.summary }}
              </p>

              @if (experience.achievements?.length) {
                <ul class="text-muted mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-6">
                  @for (achievement of experience.achievements; track achievement) {
                    <li>{{ achievement }}</li>
                  }
                </ul>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `
})
export class ExperienceSectionComponent {
  @Input({ required: true })
  experiences!: readonly Experience[];
}
