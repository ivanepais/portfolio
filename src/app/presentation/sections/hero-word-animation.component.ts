import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-word-animation',
  standalone: true,
  template: `
    <div class="hero-word-container">
      @for (word of words; track word) {
        @if ($index === currentIndex()) {
          <span
            class="hero-word"
            (animationend)="nextWord()"
          >
            {{ word }}
          </span>
        }
      } 
    </div>
  `,
  styles: `
    .hero-word-container {
      width: 12rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      overflow: hidden;
      background-color: #f5f4f7;
      border-radius: 0.75rem;

      position: absolute;
    }

    @keyframes hero-word-fade {
      0% {
        opacity: 0;
        transform: translateY(8px);
      }

      20% {
        opacity: 1;
        transform: translateY(0);
      }

      80% {
        opacity: 1;
        transform: translateY(0);
      }

      100% {
        opacity: 0;
        transform: translateY(-8px);
      }
    }

    .hero-word {
      display: inline-block;

      color: #9b8ac4;
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 0.04em;

      animation: hero-word-fade 4s ease-in-out;
    }
  `,
})
export class HeroWordAnimationComponent {
  readonly words = [
    'Design',
    'Develop',
    'Create',
    'Passion',
    'Technology',
    'Peace',
  ];

  readonly currentIndex = signal(0);

  nextWord(): void {
    this.currentIndex.update(
      (index) => (index + 1) % this.words.length,
    );
  }
}