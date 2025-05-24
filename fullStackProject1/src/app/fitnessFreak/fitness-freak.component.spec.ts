import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessFreakComponent } from './fitness-freak.component';

describe('FitnessFreakComponent', () => {
  let component: FitnessFreakComponent;
  let fixture: ComponentFixture<FitnessFreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessFreakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessFreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
