import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorsPipesComponent } from './interceptors-pipes.component';

describe('InterceptorsPipesComponent', () => {
  let component: InterceptorsPipesComponent;
  let fixture: ComponentFixture<InterceptorsPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterceptorsPipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterceptorsPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
