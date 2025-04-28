import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClousersComponent } from './clousers.component';

describe('ClousersComponent', () => {
  let component: ClousersComponent;
  let fixture: ComponentFixture<ClousersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClousersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
