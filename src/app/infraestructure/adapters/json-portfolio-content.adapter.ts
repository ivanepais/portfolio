import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { PortfolioContentPort } from '@application/ports/portfolio-content.port';
import { PortfolioContentDto } from '../dtos/portfolio-content.dto';
import { PortfolioContentMapper } from '../mappers/portfolio-content.mapper';

@Injectable({
  providedIn: 'root',
})
export class JsonPortfolioContentAdapter
  implements PortfolioContentPort
{

  private readonly http = inject(HttpClient);

  async getPortfolioContent(): Promise<PortfolioContent> {
    const dto = await firstValueFrom(
      this.http.get<PortfolioContentDto>('assets/content/portfolio-content.json'),
    );

    return PortfolioContentMapper.toDomain(dto);
  }
}