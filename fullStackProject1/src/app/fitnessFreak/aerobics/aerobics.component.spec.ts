import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerobicsComponent } from './aerobics.component';

describe('AerobicsComponent', () => {
  let component: AerobicsComponent;
  let fixture: ComponentFixture<AerobicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AerobicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AerobicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
