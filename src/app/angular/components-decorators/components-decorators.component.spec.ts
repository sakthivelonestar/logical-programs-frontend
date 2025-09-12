import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDecoratorsComponent } from './components-decorators.component';

describe('ComponentsDecoratorsComponent', () => {
  let component: ComponentsDecoratorsComponent;
  let fixture: ComponentFixture<ComponentsDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsDecoratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
