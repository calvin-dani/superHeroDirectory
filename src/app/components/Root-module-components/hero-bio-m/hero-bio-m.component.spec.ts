import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBioMComponent } from './hero-bio-m.component';

describe('HeroBioMComponent', () => {
  let component: HeroBioMComponent;
  let fixture: ComponentFixture<HeroBioMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBioMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBioMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
