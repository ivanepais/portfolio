import { TestBed } from '@angular/core/testing';
import { describe, beforeEach, expect, it, vi } from 'vitest';

import { GetPortfolioContentUseCase } from '@application/use-cases/get-portfolio-content.use-case';

import { PortfolioFacade } from './portfolio.facade';

import { PortfolioContent } from '@application/ports/portfolio-content.port';

describe('PortfolioFacade', () => {
  let facade: PortfolioFacade;
  let execute: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    execute = vi.fn();

    TestBed.configureTestingModule({
      providers: [
        PortfolioFacade,
        {
          provide: GetPortfolioContentUseCase,
          useValue: {
            execute
          }
        }
      ]
    });

    facade = TestBed.inject(PortfolioFacade);
  });

  it('execute the use case when loading the content', () => {
    facade.load();

    expect(execute).toHaveBeenCalledOnce();
  });

  it('return the content obtained by the use case', async () => {
    const portfolioContent = {} as PortfolioContent;

    execute.mockResolvedValue(portfolioContent);

    const result = await facade.load();

    expect(result).toBe(portfolioContent);
  });

  it('should propagate the use case error', async () => {
    const error = new Error('Error retrieving content');

    execute.mockRejectedValue(error);

    await expect(facade.load()).rejects.toBe(error);
  });
});
