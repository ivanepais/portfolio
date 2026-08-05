import {
  PortfolioContent,
  PortfolioContentPort,
} from '../ports/portfolio-content.port';

export class GetPortfolioContentUseCase {
  constructor(private readonly portfolioContentPort: PortfolioContentPort) {}

  execute(): Promise<PortfolioContent> {
    return this.portfolioContentPort.getPortfolioContent();
  }
}