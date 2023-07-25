import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageComponent } from './admin-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GetTracksComponent } from '@modules/admin/components/get-tracks/get-tracks.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

describe('AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
      HttpClientTestingModule],
      declarations: [AdminPageComponent, 
      GetTracksComponent, 
      OrderListPipe]
    });
    fixture = TestBed.createComponent(AdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
