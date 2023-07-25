import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { NewTrackComponent } from './new-track.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('NewTrackComponent', () => {
  let component: NewTrackComponent;
  let fixture: ComponentFixture<NewTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        ReactiveFormsModule],
      declarations: [NewTrackComponent]
    });
    fixture = TestBed.createComponent(NewTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
