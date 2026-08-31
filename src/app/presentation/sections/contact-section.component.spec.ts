import { render, screen } from '@testing-library/angular';
import { describe, expect, it } from 'vitest';

import { Contact } from '@domain/contact.entity';

import { ContactSectionComponent } from './contact-section.component';

describe('ContactSectionComponent', () => {
  const contact: Contact = {
    email: 'test@example.com',
    location: 'Argentina',
    availableForWork: true
  };

  it('display contact information', async () => {
    await render(ContactSectionComponent, {
      componentInputs: {
        contact
      }
    });

    const emailLink = screen.getByRole('link', {
      name: contact.email
    });

    expect(emailLink.getAttribute('href')).toBe(`mailto:${contact.email}`);

    const location = screen.getByText(contact.location!);

    expect(location).toBeTruthy();
  });

  it('do not show location when unavailable', async () => {
    await render(ContactSectionComponent, {
      componentInputs: {
        contact: {
          email: contact.email,
          availableForWork: contact.availableForWork
        }
      }
    });

    expect(screen.queryByText(contact.location!)).toBeNull();
  });

  it('indicate that you are available for new opportunities', async () => {
    await render(ContactSectionComponent, {
      componentInputs: {
        contact
      }
    });

    expect(screen.getByText('Available for new opportunities')).toBeTruthy();
  });

  it('indicate that it is currently unavailable.', async () => {
    await render(ContactSectionComponent, {
      componentInputs: {
        contact: {
          ...contact,
          availableForWork: false
        }
      }
    });

    expect(screen.getByText('Not currently available')).toBeTruthy();
  });
});
