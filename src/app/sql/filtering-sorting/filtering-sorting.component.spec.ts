import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringSortingComponent } from './filtering-sorting.component';

describe('FilteringSortingComponent', () => {
  let component: FilteringSortingComponent;
  let fixture: ComponentFixture<FilteringSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteringSortingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilteringSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
