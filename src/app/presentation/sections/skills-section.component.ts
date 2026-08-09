import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Skill } from '@domain/skill.entity';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-slate-50">Habilidades</h2>

      <div class="mt-8 flex flex-wrap gap-3">
        @for (skill of skills; track skill.id) {
          <div class="skills-section__item">
            <span class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              {{ skill.name }}
            </span>

            @if (skill.category) {
              <span class=class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                {{ skill.category }}
              </span>
            }
          </div>
        }
      </div>
    </section>
  `,
})
export class SkillsSectionComponent {
  @Input({ required: true }) skills!: readonly Skill[];
}