import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTransitionsComponent } from './basic-transitions.component';

describe('BasicTransitionsComponent', () => {
  let component: BasicTransitionsComponent;
  let fixture: ComponentFixture<BasicTransitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTransitionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
