import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';
import { SocialLink } from '@domain/social-link.entity';

import { PortfolioHeaderComponent } from '../sections/portfolio-header.component';
import { BackToTopComponent } from '../sections/back-to-top.component';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [
    CommonModule, 
    PortfolioHeaderComponent,
    BackToTopComponent,
  ],
  template: `
    <div
      id="top"
      class="mx-auto flex min-h-screen w-full flex-col px-6 py-6 text-text sm:px-8 lg:px-10"
    >

      <app-portfolio-header
        [profile]="profile"
        [socialLinks]="socialLinks"
      />

      <main class="flex-1 mx-auto">
        <ng-content />
      </main>

      <footer class="max-w-5xl mx-auto mt-8 border-t border-border pt-6 text-sm text-muted">
        <p>{{ footerText }}</p>
      </footer>
      <app-back-to-top />
    </div>
  `,
})
export class PortfolioLayoutComponent {
  @Input({ required: true })
  profile!: Profile;

  @Input({ required: true })
  socialLinks!: readonly SocialLink[];

  @Input({ required: true })
  footerText!: string;
}
