import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetWorldComponent } from './pet-world.component';

describe('PetWorldComponent', () => {
  let component: PetWorldComponent;
  let fixture: ComponentFixture<PetWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
