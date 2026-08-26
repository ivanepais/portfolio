import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { describe, beforeEach, expect, it } from 'vitest';

import { Profile } from '@domain/profile.entity';

import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  let fixture: ComponentFixture<HeroSectionComponent>;
  let component: HeroSectionComponent;

  const profile: Profile = {
    fullName: 'Test User',
    role: 'Frontend Developer',
    headline: 'Test headline',
    summary: 'Test summary',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSectionComponent);
    component = fixture.componentInstance;

    component.profile = profile;

    fixture.detectChanges();
  });

  it('debería mostrar el nombre del perfil', () => {
    const heading = fixture.nativeElement.querySelector('h1');

    expect(heading?.textContent).toContain(profile.fullName);
  });

  it('debería mostrar el rol del perfil', () => {
    const paragraphs = fixture.nativeElement.querySelectorAll('p');

    expect(paragraphs[1]?.textContent).toContain(profile.role);
  });

  it('debería mostrar el headline del perfil', () => {
    const paragraphs = fixture.nativeElement.querySelectorAll('p');

    expect(paragraphs[2]?.textContent).toContain(profile.headline);
  });

  it('debería mostrar el resumen del perfil', () => {
    const paragraphs = fixture.nativeElement.querySelectorAll('p');

    expect(paragraphs[3]?.textContent).toContain(profile.summary);
  });
});