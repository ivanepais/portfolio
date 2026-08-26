import { vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

import {
  PORTFOLIO_CONTENT_PORT,
  PortfolioContentPort,
} from '@application/ports/portfolio-content.port';

describe('App', () => {
  beforeEach(async () => {
    const portfolioContentPort: PortfolioContentPort = {
      getPortfolioContent: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        {
          provide: PORTFOLIO_CONTENT_PORT,
          useValue: portfolioContentPort,
        },
      ],
    }).compileComponents();
  });
  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
