import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="top" class="hero-section">
      <p class="hero-section__eyebrow">Hola, soy</p>

      <h1 class="hero-section__title">
        {{ profile.fullName }}
      </h1>

      <p class="hero-section__role">
        {{ profile.role }}
      </p>

      <p class="hero-section__headline">
        {{ profile.headline }}
      </p>

      <p class="hero-section__summary">
        {{ profile.summary }}
      </p>

      <div class="hero-section__actions">
        <a href="#projects">Ver proyectos</a>
        <a href="#contact">Contactarme</a>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  @Input({ required: true }) profile!: Profile;
}