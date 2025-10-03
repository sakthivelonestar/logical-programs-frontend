import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpLoderComponent } from './http-loder.component';

describe('HttpLoderComponent', () => {
  let component: HttpLoderComponent;
  let fixture: ComponentFixture<HttpLoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpLoderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpLoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
