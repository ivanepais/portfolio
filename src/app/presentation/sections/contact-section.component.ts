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
              ? 'Available for new opportunities'
              : 'Not currently available'
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
