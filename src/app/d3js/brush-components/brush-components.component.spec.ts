import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushComponentsComponent } from './brush-components.component';

describe('BrushComponentsComponent', () => {
  let component: BrushComponentsComponent;
  let fixture: ComponentFixture<BrushComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrushComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrushComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
