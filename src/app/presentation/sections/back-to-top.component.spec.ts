import { render, screen } from '@testing-library/angular';
import { describe, expect, it } from 'vitest';

import { BackToTopComponent } from './back-to-top.component';

describe('BackToTopComponent', () => {
  it('Render the link to return to the homepage', async () => {
    await render(BackToTopComponent);

    const link = screen.getByRole('link', {
      name: 'Back to Top'
    });

    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe('#top');
  });
});
