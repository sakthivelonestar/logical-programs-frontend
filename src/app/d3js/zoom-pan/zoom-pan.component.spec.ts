import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomPanComponent } from './zoom-pan.component';

describe('ZoomPanComponent', () => {
  let component: ZoomPanComponent;
  let fixture: ComponentFixture<ZoomPanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoomPanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoomPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
