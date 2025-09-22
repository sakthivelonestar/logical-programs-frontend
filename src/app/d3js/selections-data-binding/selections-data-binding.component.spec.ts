import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionsDataBindingComponent } from './selections-data-binding.component';

describe('SelectionsDataBindingComponent', () => {
  let component: SelectionsDataBindingComponent;
  let fixture: ComponentFixture<SelectionsDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionsDataBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectionsDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
