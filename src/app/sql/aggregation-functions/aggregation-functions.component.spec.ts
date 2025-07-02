import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregationFunctionsComponent } from './aggregation-functions.component';

describe('AggregationFunctionsComponent', () => {
  let component: AggregationFunctionsComponent;
  let fixture: ComponentFixture<AggregationFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggregationFunctionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AggregationFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
