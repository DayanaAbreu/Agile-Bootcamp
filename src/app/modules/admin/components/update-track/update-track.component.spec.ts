import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { UpdateTrackComponent } from './update-track.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('UpdateTrackComponent', () => {
  let component: UpdateTrackComponent;
  let fixture: ComponentFixture<UpdateTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
      ReactiveFormsModule],
      declarations: [UpdateTrackComponent]
    });
    fixture = TestBed.createComponent(UpdateTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
