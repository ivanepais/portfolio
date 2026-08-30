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
      class="mx-auto max-w-2xl scroll-mt-20 bg-[url('/assets/hero-background.svg')] bg-contain bg-right bg-no-repeat pt-8"
    >
      <p class="text-muted mb-4 text-sm font-medium tracking-[0.3em] uppercase">Hola, soy</p>

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

/*
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';

import { HeroWordAnimationComponent } from '../sections/hero-word-animation.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
    HeroWordAnimationComponent,
  ],
  template: `
    <section
      id="hero"
      class="relative mx-auto max-w-5xl scroll-mt-20 pt-8"
    >
      <div class="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <p
            class="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted"
          >
            Hola, soy
          </p>

          <h1
            class="text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl"
          >
            {{ profile.fullName }}
          </h1>

          <p
            class="mt-4 text-xl font-medium text-muted sm:text-2xl"
          >
            {{ profile.role }}
          </p>

          <p
            class="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg"
          >
            {{ profile.headline }}
          </p>

          <p
            class="mt-4 max-w-2xl text-base leading-7 text-muted"
          >
            {{ profile.summary }}
          </p>
        </div>

        <app-hero-word-animation />
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  @Input({ required: true })
  profile!: Profile;
}
*/
