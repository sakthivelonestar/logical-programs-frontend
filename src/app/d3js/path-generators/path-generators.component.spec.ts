import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathGeneratorsComponent } from './path-generators.component';

describe('PathGeneratorsComponent', () => {
  let component: PathGeneratorsComponent;
  let fixture: ComponentFixture<PathGeneratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathGeneratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PathGeneratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
