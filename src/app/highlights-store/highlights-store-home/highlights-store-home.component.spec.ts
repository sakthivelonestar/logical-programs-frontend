import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsStoreHomeComponent } from './highlights-store-home.component';

describe('HighlightsStoreHomeComponent', () => {
  let component: HighlightsStoreHomeComponent;
  let fixture: ComponentFixture<HighlightsStoreHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightsStoreHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightsStoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
