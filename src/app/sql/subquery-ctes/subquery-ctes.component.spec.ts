import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubqueryCtesComponent } from './subquery-ctes.component';

describe('SubqueryCtesComponent', () => {
  let component: SubqueryCtesComponent;
  let fixture: ComponentFixture<SubqueryCtesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubqueryCtesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubqueryCtesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
