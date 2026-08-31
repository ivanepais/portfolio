import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="hero"
      class="mx-auto max-w-2xl scroll-mt-20 bg-[url('/assets/images/hero-background.svg')] bg-contain bg-right bg-no-repeat pt-8"
    >
      <p class="text-muted mb-4 text-sm font-medium tracking-[0.3em] uppercase">Hello, I am</p>

      <h1 class="text-text text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
        {{ profile.fullName }}
      </h1>

      <p class="text-muted mt-4 text-xl font-medium sm:text-2xl">
        {{ profile.role }}
      </p>

      <p class="text-muted mt-6 max-w-2xl text-base leading-7 sm:text-lg">
        {{ profile.headline }}
      </p>

      <p class="text-muted mt-4 max-w-2xl text-base leading-7">
        {{ profile.summary }}
      </p>
    </section>
  `
})
export class HeroSectionComponent {
  @Input({ required: true })
  profile!: Profile;
}

