import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlhomeComponent } from './sqlhome.component';

describe('SqlhomeComponent', () => {
  let component: SqlhomeComponent;
  let fixture: ComponentFixture<SqlhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SqlhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
