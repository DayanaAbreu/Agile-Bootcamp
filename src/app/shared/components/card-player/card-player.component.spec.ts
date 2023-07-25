import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { CardPlayerComponent } from './card-player.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';

describe('CardPlayerComponent', () => {
  let component: CardPlayerComponent;
  let fixture: ComponentFixture<CardPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterModule
        ],
      declarations: [CardPlayerComponent,
      ImgBrokenDirective]
    });
    fixture = TestBed.createComponent(CardPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
