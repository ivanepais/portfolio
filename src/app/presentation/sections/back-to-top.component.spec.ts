import { render, screen } from '@testing-library/angular';
import { describe, expect, it } from 'vitest';

import { BackToTopComponent } from './back-to-top.component';

describe('BackToTopComponent', () => {
  it('debería renderizar el enlace para volver al inicio', async () => {
    await render(BackToTopComponent);

    const link = screen.getByRole('link', {
      name: 'Back to Top'
    });

    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe('#top');
  });
});
