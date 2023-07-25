import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { AuthPageComponent } from './auth-page.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        ReactiveFormsModule],
      declarations: [AuthPageComponent]
    });
    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
