import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import {
  PORTFOLIO_CONTENT_PORT,
} from '@application/ports/portfolio-content.port';

import { JsonPortfolioContentAdapter } from '@infrastructure/adapters/json-portfolio-content.adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    {
      provide: PORTFOLIO_CONTENT_PORT,
      useClass: JsonPortfolioContentAdapter,
    },
  ],
};
