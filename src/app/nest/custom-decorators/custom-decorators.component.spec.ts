import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDecoratorsComponent } from './custom-decorators.component';

describe('CustomDecoratorsComponent', () => {
  let component: CustomDecoratorsComponent;
  let fixture: ComponentFixture<CustomDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDecoratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
