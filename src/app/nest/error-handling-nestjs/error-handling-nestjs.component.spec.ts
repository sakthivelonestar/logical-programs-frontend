import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingNestjsComponent } from './error-handling-nestjs.component';

describe('ErrorHandlingNestjsComponent', () => {
  let component: ErrorHandlingNestjsComponent;
  let fixture: ComponentFixture<ErrorHandlingNestjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorHandlingNestjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorHandlingNestjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
