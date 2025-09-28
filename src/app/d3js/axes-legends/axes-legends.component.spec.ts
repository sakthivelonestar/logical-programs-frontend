import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxesLegendsComponent } from './axes-legends.component';

describe('AxesLegendsComponent', () => {
  let component: AxesLegendsComponent;
  let fixture: ComponentFixture<AxesLegendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxesLegendsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxesLegendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
