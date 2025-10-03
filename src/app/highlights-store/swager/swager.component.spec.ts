import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwagerComponent } from './swager.component';

describe('SwagerComponent', () => {
  let component: SwagerComponent;
  let fixture: ComponentFixture<SwagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
