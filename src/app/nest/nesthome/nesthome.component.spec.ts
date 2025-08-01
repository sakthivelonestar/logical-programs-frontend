import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesthomeComponent } from './nesthome.component';

describe('NesthomeComponent', () => {
  let component: NesthomeComponent;
  let fixture: ComponentFixture<NesthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NesthomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NesthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
