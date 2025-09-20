import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewJsComponent } from './interview-js.component';

describe('InterviewJsComponent', () => {
  let component: InterviewJsComponent;
  let fixture: ComponentFixture<InterviewJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterviewJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
