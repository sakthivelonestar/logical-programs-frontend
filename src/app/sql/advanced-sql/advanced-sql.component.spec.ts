import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSqlComponent } from './advanced-sql.component';

describe('AdvancedSqlComponent', () => {
  let component: AdvancedSqlComponent;
  let fixture: ComponentFixture<AdvancedSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedSqlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
