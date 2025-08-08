import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestjsSetupComponent } from './nestjs-setup.component';

describe('NestjsSetupComponent', () => {
  let component: NestjsSetupComponent;
  let fixture: ComponentFixture<NestjsSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestjsSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestjsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
