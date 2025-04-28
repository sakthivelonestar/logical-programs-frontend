import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserApiComponent } from './browser-api.component';

describe('BrowserApiComponent', () => {
  let component: BrowserApiComponent;
  let fixture: ComponentFixture<BrowserApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowserApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
