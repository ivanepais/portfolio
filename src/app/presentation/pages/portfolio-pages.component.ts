import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { PortfolioFacade } from '../services/portfolio.facade';
import { PortfolioContent } from '@application/ports/portfolio-content.port';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="portfolio-page">
      @if (content(); as portfolio) {
        <p>{{ portfolio.profile.fullName }}</p>
      } @else {
        <p>Cargando portfolio...</p>
      }
    </main>
  `,
})
export class PortfolioPageComponent implements OnInit {
  private readonly portfolioFacade = inject(PortfolioFacade);

  readonly content = signal<PortfolioContent | null>(null);

  async ngOnInit(): Promise<void> {
    const portfolio = await this.portfolioFacade.load();
    this.content.set(portfolio);
  }
}