import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseIntegrationComponent } from './database-integration.component';

describe('DatabaseIntegrationComponent', () => {
  let component: DatabaseIntegrationComponent;
  let fixture: ComponentFixture<DatabaseIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabaseIntegrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatabaseIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
