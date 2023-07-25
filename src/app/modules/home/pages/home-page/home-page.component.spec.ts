import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, 
      RouterTestingModule,
      HttpClientTestingModule],
      declarations: [HomePageComponent,
      SideBarComponent,
      MediaPlayerComponent]
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
