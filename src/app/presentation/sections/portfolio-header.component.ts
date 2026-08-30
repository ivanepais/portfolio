import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '@domain/profile.entity';
import { SocialLink } from '@domain/social-link.entity';

@Component({
  selector: 'app-portfolio-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="mx-auto flex max-w-2xl items-center justify-between">
      <div class="size-12 rounded-full object-cover">
        @if (profile.avatarUrl) {
          <img
            class="portfolio-header__avatar"
            [src]="profile.avatarUrl"
            [alt]="profile.fullName"
          />
        }
      </div>

      @if (socialLinks.length) {
        <nav
          class="hover:text-accent flex items-center gap-4 transition-colors"
          aria-label="Social Networks"
        >
          @for (link of socialLinks; track link.platform) {
            <a
              class="border-border text-text hover:bg-muted inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors"
              [href]="link.platform === 'email' ? 'mailto:' + link.url : link.url"
              target="_blank"
              rel="noreferrer"
            >
              {{ link.label }}
            </a>
          }
          <a
            class="border-border text-text hover:bg-muted inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors"
            href="../../../assets/public/documents/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </nav>
      }
    </header>
  `
})
export class PortfolioHeaderComponent {
  @Input({ required: true })
  profile!: Profile;

  @Input({ required: true })
  socialLinks!: readonly SocialLink[];
}
