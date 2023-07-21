import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTracksComponent } from './get-tracks.component';

describe('GetTracksComponent', () => {
  let component: GetTracksComponent;
  let fixture: ComponentFixture<GetTracksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTracksComponent]
    });
    fixture = TestBed.createComponent(GetTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
