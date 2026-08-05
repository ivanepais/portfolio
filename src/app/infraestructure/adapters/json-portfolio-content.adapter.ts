import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import {
  PortfolioContent,
  PortfolioContentPort,
} from '@application/ports/portfolio-content.port';

@Injectable({
  providedIn: 'root',
})
export class JsonPortfolioContentAdapter
  implements PortfolioContentPort
{

  private readonly http = inject(HttpClient);

  getPortfolioContent(): Promise<PortfolioContent> {
    return firstValueFrom(
      this.http.get<PortfolioContent>('assets/content/portfolio-content.json')
    );
  }
}