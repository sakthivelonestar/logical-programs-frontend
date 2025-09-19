import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManagementBasicsComponent } from './state-management-basics.component';

describe('StateManagementBasicsComponent', () => {
  let component: StateManagementBasicsComponent;
  let fixture: ComponentFixture<StateManagementBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateManagementBasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StateManagementBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
