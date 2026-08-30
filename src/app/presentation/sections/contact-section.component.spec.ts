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

  it('debería mostrar la información de contacto', async () => {
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

  it('no debería mostrar la ubicación cuando no está disponible', async () => {
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

  it('debería indicar que está disponible para nuevas oportunidades', async () => {
    await render(ContactSectionComponent, {
      componentInputs: {
        contact
      }
    });

    expect(screen.getByText('Disponible para nuevas oportunidades')).toBeTruthy();
  });

  it('debería indicar que no está disponible actualmente', async () => {
    await render(ContactSectionComponent, {
      componentInputs: {
        contact: {
          ...contact,
          availableForWork: false
        }
      }
    });

    expect(screen.getByText('No disponible actualmente')).toBeTruthy();
  });
});
