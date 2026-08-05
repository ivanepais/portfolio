import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="portfolio-layout">
      <header class="portfolio-layout__header">
        <a class="portfolio-layout__brand" href="#top">Tu Nombre</a>

        <nav class="portfolio-layout__nav" aria-label="Navegación principal">
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <main class="portfolio-layout__main">
        <ng-content></ng-content>
      </main>

      <footer class="portfolio-layout__footer">
        <p>© 2026 Tu Nombre. Todos los derechos reservados.</p>
      </footer>
    </div>
  `,
})
export class PortfolioLayoutComponent {}
