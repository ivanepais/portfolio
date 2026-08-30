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

  it('debería ejecutar el caso de uso al cargar el contenido', () => {
    facade.load();

    expect(execute).toHaveBeenCalledOnce();
  });

  it('debería devolver el contenido obtenido por el caso de uso', async () => {
    const portfolioContent = {} as PortfolioContent;

    execute.mockResolvedValue(portfolioContent);

    const result = await facade.load();

    expect(result).toBe(portfolioContent);
  });

  it('debería propagar el error del caso de uso', async () => {
    const error = new Error('Error al obtener el contenido');

    execute.mockRejectedValue(error);

    await expect(facade.load()).rejects.toBe(error);
  });
});
