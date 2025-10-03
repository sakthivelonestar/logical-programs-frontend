import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerFBComponent } from './logger-f-b.component';

describe('LoggerFBComponent', () => {
  let component: LoggerFBComponent;
  let fixture: ComponentFixture<LoggerFBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggerFBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggerFBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
