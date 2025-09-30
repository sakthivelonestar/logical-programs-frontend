import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewD3Component } from './interview-d3.component';

describe('InterviewD3Component', () => {
  let component: InterviewD3Component;
  let fixture: ComponentFixture<InterviewD3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewD3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterviewD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
