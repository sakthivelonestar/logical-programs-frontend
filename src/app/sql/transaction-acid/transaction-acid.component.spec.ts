import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAcidComponent } from './transaction-acid.component';

describe('TransactionAcidComponent', () => {
  let component: TransactionAcidComponent;
  let fixture: ComponentFixture<TransactionAcidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionAcidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionAcidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
