import { Component } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    <a
      href="#top"
      aria-label="Back to Top"
      class="border-border bg-text text-surface focus-visible:ring-border focus-visible:ring-offset-background fixed right-6 bottom-6 inline-flex size-10 items-center justify-center rounded-full border shadow-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:right-70 sm:bottom-8"
    >
      ↑
    </a>
  `
})
export class BackToTopComponent {}
