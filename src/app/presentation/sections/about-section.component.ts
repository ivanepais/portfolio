import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <div class="max-w-3xl">  
        <h2 class="about-section__title">Sobre mí</h2>

        <div class="mt-6 space-y-4 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
          <p class="about-section__text">
            {{ profile.summary }}
          </p>
        </div>
    
      </div>
    </section>
  `,
})
export class AboutSectionComponent {
  @Input({ required: true }) profile!: Profile;
}