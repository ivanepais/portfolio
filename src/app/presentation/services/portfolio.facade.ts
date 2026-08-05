import { Injectable, inject } from '@angular/core';

import { GetPortfolioContentUseCase } from '@application/use-cases/get-portfolio-content.use-case';
import { PortfolioContent } from '@application/ports/portfolio-content.port';

@Injectable({
  providedIn: 'root',
})
export class PortfolioFacade {
  private readonly getPortfolioContentUseCase = inject(GetPortfolioContentUseCase);

  load(): Promise<PortfolioContent> {
    return this.getPortfolioContentUseCase.execute();
  }
}