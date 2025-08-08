import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlewareNestjsComponent } from './middleware-nestjs.component';

describe('MiddlewareNestjsComponent', () => {
  let component: MiddlewareNestjsComponent;
  let fixture: ComponentFixture<MiddlewareNestjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddlewareNestjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiddlewareNestjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
