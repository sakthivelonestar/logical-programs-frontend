import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstControllerComponent } from './first-controller.component';

describe('FirstControllerComponent', () => {
  let component: FirstControllerComponent;
  let fixture: ComponentFixture<FirstControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
