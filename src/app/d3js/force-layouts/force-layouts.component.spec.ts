import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceLayoutsComponent } from './force-layouts.component';

describe('ForceLayoutsComponent', () => {
  let component: ForceLayoutsComponent;
  let fixture: ComponentFixture<ForceLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForceLayoutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForceLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
