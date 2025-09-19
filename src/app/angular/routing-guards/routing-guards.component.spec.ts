import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingGuardsComponent } from './routing-guards.component';

describe('RoutingGuardsComponent', () => {
  let component: RoutingGuardsComponent;
  let fixture: ComponentFixture<RoutingGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingGuardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
