import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtoValidationComponent } from './dto-validation.component';

describe('DtoValidationComponent', () => {
  let component: DtoValidationComponent;
  let fixture: ComponentFixture<DtoValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtoValidationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DtoValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
