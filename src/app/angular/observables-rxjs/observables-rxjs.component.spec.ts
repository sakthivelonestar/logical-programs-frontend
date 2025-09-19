import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesRxjsComponent } from './observables-rxjs.component';

describe('ObservablesRxjsComponent', () => {
  let component: ObservablesRxjsComponent;
  let fixture: ComponentFixture<ObservablesRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesRxjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservablesRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
