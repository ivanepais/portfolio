import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="top" class="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <div class="max-w-3xl">
        <p class="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Hola, soy</p>

        <h1 class="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-slate-50">
          {{ profile.fullName }}
        </h1>

        <p class="mt-4 text-xl font-medium text-slate-700 sm:text-2xl dark:text-slate-300">
          {{ profile.role }}
        </p>

        <p class="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
          {{ profile.headline }}
        </p>

        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
          {{ profile.summary }}
        </p>

        <div div class="mt-8 flex flex-wrap gap-3">
          <a href="#projects"
            class="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200"
          >Ver proyectos</a>
          
          <a href="#contact"
            class="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-50"
          >Contactarme</a>
        </div>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  @Input({ required: true }) profile!: Profile;
}