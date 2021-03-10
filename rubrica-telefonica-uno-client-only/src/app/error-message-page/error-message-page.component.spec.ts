import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessagePageComponent } from './error-message-page.component';

describe('ErrorMessagePageComponent', () => {
  let component: ErrorMessagePageComponent;
  let fixture: ComponentFixture<ErrorMessagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMessagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
