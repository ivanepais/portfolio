import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Skill } from '@domain/skill.entity';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="scroll-mt-20 py-2">
      <div class="mt-4 flex flex-wrap gap-3">
        @for (skill of skills; track skill.id) {
          <span
            class="border-border bg-surface text-muted rounded-full border px-4 py-2 text-sm font-medium shadow-sm"
          >
            {{ skill.name }}
          </span>
        }
      </div>
    </section>
  `
})
export class SkillsSectionComponent {
  @Input({ required: true })
  skills!: readonly Skill[];
}
