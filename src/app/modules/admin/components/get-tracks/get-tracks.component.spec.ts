import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { GetTracksComponent } from './get-tracks.component';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

describe('GetTracksComponent', () => {
  let component: GetTracksComponent;
  let fixture: ComponentFixture<GetTracksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GetTracksComponent,
      OrderListPipe]
    });
    fixture = TestBed.createComponent(GetTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
