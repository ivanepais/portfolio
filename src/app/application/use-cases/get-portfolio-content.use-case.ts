import { Inject, Injectable } from '@angular/core';

import {
  PORTFOLIO_CONTENT_PORT,
  PortfolioContent,
  PortfolioContentPort,
} from '../ports/portfolio-content.port';

@Injectable({
  providedIn: 'root',
})

export class GetPortfolioContentUseCase {
  constructor(
    @Inject(PORTFOLIO_CONTENT_PORT)
    private readonly portfolioContentPort: PortfolioContentPort,
  ) {}
  
  execute(): Promise<PortfolioContent> {
    return this.portfolioContentPort.getPortfolioContent();
  }
}