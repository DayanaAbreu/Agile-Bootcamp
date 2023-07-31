import { Component, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrackModel } from '@core/models/tracks.model';
import { AdminService } from '@modules/admin/services/admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  newTrackElement: any
  botonAgregado = false
  botonTrack= false

  constructor() {}

  pressNewTrack() {
    this.botonTrack= true
  }

  getNew(track: any) {
    if(track) {
      this.newTrackElement = track;
      this.botonAgregado = true;
    }
  }

 
}
