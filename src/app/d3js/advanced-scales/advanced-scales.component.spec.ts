import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedScalesComponent } from './advanced-scales.component';

describe('AdvancedScalesComponent', () => {
  let component: AdvancedScalesComponent;
  let fixture: ComponentFixture<AdvancedScalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedScalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedScalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
