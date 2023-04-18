import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetLostComponent } from './pet-lost.component';

describe('PetLostComponent', () => {
  let component: PetLostComponent;
  let fixture: ComponentFixture<PetLostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetLostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
