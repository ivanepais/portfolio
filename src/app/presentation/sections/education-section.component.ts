/*
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Education } from '@domain/education.entity';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-slate-50">
        Educación
      </h2>

      <div class="mt-8 space-y-8">
        @for (education of educationList; track education.id) {

          <article class="border-l-2 border-slate-200 pl-6 dark:border-slate-800">

            <header class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                {{ education.degree }}
              </h3>

              <p class="mt-1 text-base font-medium text-slate-700 dark:text-slate-300">
                {{ education.institution }}
              </p>

              <p class="text-sm text-slate-500 dark:text-slate-400">
                {{ education.startDate }}
                —
                {{ education.endDate ?? 'Actualidad' }}
              </p>
            </header>

            @if (education.summary) {
              <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400">
                {{ education.summary }}
              </p>
            }

          </article>

        }
      </div>
    </section>
  `,
})
export class EducationSectionComponent {
  @Input({ required: true })
  educationList!: readonly Education[];
}
*/

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Education } from '@domain/education.entity';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="education"
      class="scroll-mt-24 py-12 sm:py-16 lg:py-20"
    >
      <div class="max-w-5xl">
        <h2
          class="text-2xl font-semibold tracking-tight text-text sm:text-3xl"
        >
          Educación
        </h2>

        <div class="mt-8 space-y-8">
          @for (education of educationList; track education.id) {
            <article
              class="border-l-2 border-border pl-6"
            >
              <div
                class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <div>
                  <h3
                    class="text-xl font-semibold tracking-tight text-text"
                  >
                    {{ education.degree }}
                  </h3>

                  <p
                    class="mt-1 text-base font-medium text-muted"
                  >
                    {{ education.institution }}
                  </p>
                </div>

                <p
                  class="text-sm text-muted"
                >
                  {{ education.startDate }} —
                  {{ education.endDate ?? 'Actualidad' }}
                </p>
              </div>

              @if (education.summary) {
                <p
                  class="mt-4 max-w-3xl text-base leading-7 text-muted"
                >
                  {{ education.summary }}
                </p>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class EducationSectionComponent {
  @Input({ required: true })
  educationList!: readonly Education[];
}