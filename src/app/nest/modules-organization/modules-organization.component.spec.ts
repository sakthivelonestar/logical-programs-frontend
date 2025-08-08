import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesOrganizationComponent } from './modules-organization.component';

describe('ModulesOrganizationComponent', () => {
  let component: ModulesOrganizationComponent;
  let fixture: ComponentFixture<ModulesOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesOrganizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModulesOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
