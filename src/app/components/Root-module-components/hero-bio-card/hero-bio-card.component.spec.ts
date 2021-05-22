import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBioCardComponent } from './hero-bio-card.component';

describe('HeroBioCardComponent', () => {
  let component: HeroBioCardComponent;
  let fixture: ComponentFixture<HeroBioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
