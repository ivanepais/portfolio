import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';
import { SocialLink } from '@domain/social-link.entity';

import { PortfolioHeaderComponent } from '../sections/portfolio-header.component';
import { BackToTopComponent } from '../sections/back-to-top.component';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule, PortfolioHeaderComponent, BackToTopComponent],
  template: `
    <div
      id="top"
      class="text-text mx-auto flex min-h-screen w-full flex-col px-6 py-6 sm:px-8 lg:px-10"
    >
      <app-portfolio-header [profile]="profile" [socialLinks]="socialLinks" />

      <main class="mx-auto flex-1">
        <ng-content />
      </main>

      <footer class="border-border text-muted mx-auto mt-8 max-w-5xl border-t pt-6 text-sm">
        <p>{{ footerText }}</p>
      </footer>
      <app-back-to-top />
    </div>
  `
})
export class PortfolioLayoutComponent {
  @Input({ required: true })
  profile!: Profile;

  @Input({ required: true })
  socialLinks!: readonly SocialLink[];

  @Input({ required: true })
  footerText!: string;
}
