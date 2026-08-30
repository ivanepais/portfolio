/*
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Contact } from '@domain/contact.entity';
import { SocialLink } from '@domain/social-link.entity';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="contact"
      class="scroll-mt-24 py-12 sm:py-16 lg:py-20"
    >
      <div class="max-w-5xl">
        <h2
          class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-slate-50"
        >
          Contacto
        </h2>

        <div
          class="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <p class="text-base leading-7 text-slate-600 dark:text-slate-400">
            <a
              class="font-medium text-slate-950 transition-colors hover:text-slate-700 dark:text-slate-50 dark:hover:text-slate-300"
              [href]="'mailto:' + contact.email"
            >
              {{ contact.email }}
            </a>
          </p>

          @if (contact.location) {
            <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {{ contact.location }}
            </p>
          }

          <p class="mt-4 text-sm font-medium text-slate-700 dark:text-slate-300">
            {{
              contact.availableForWork
                ? 'Disponible para nuevas oportunidades'
                : 'No disponible actualmente'
            }}
          </p>

          @if (socialLinks.length) {
            <div class="mt-6 flex flex-wrap gap-3">
              @for (link of socialLinks; track link.url) {
                <a
                  class="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-50"
                  [href]="link.url"
                  target="_blank"
                  rel="noreferrer"
                >
                  {{ link.label }}
                </a>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ContactSectionComponent {
  @Input({ required: true })
  contact!: Contact;

  @Input({ required: true })
  socialLinks!: readonly SocialLink[];
}
*/

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Contact } from '@domain/contact.entity';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="scroll-mt-20">
      <div class="border-border bg-surface mx-auto mt-8 max-w-2xl rounded-2xl border p-6 shadow-sm">
        <p class="text-muted text-base leading-7">
          <a
            class="text-text hover:text-muted font-medium transition-colors"
            [href]="'mailto:' + contact.email"
          >
            {{ contact.email }}
          </a>
        </p>

        @if (contact.location) {
          <p class="text-muted mt-2 text-sm">
            {{ contact.location }}
          </p>
        }

        <p class="text-text mt-4 text-sm font-medium">
          {{
            contact.availableForWork
              ? 'Disponible para nuevas oportunidades'
              : 'No disponible actualmente'
          }}
        </p>
      </div>
    </section>
  `
})
export class ContactSectionComponent {
  @Input({ required: true })
  contact!: Contact;
}
