import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProceduresComponent } from './store-procedures.component';

describe('StoreProceduresComponent', () => {
  let component: StoreProceduresComponent;
  let fixture: ComponentFixture<StoreProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreProceduresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
