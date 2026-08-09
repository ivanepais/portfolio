import { Component } from '@angular/core';

import { PortfolioPageComponent } from './presentation/pages/portfolio-page.component';

@Component({
  selector: 'app-root',
  imports: [PortfolioPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
