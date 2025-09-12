import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularArchitectureComponent } from './angular-architecture.component';

describe('AngularArchitectureComponent', () => {
  let component: AngularArchitectureComponent;
  let fixture: ComponentFixture<AngularArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularArchitectureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
