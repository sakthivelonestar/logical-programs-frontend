import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicQueriesComponent } from './basic-queries.component';

describe('BasicQueriesComponent', () => {
  let component: BasicQueriesComponent;
  let fixture: ComponentFixture<BasicQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicQueriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
