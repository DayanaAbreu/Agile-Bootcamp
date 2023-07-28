import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrackModel } from '@core/models/tracks.model';
import { AdminService } from '@modules/admin/services/admin.service';
import { TrackService } from '@modules/tracks/services/track.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-update-track',
  templateUrl: './update-track.component.html',
  styleUrls: ['./update-track.component.css']
})
export class UpdateTrackComponent implements OnInit {

  formAdmin: UntypedFormGroup = new UntypedFormGroup({});
  trackNumber: null | undefined | number;
  @Output() trackNumberEvent: EventEmitter<number | null> = new EventEmitter();

  
  constructor(public adminService: AdminService, public cookie: CookieService, private router: Router,
    public tracksService: TrackService) {}

  ngOnInit(): void {
    this.formAdmin = new UntypedFormGroup(
      {
        name: new UntypedFormControl('', [
          Validators.required,
        ])
      }
    )
  }

  sendUpdatedTrack(term: null): void {
    const { name } = this.formAdmin.value
    const id = this.cookie.get('idTrack')
    this.trackNumber = null
    this.trackNumberEvent.emit(term)
    this.adminService.updateTrack(id, name)
      .subscribe(responseOk => {
        console.log('Track actualizado correctamente', responseOk)
        this.formAdmin.reset()
      })
  }

}
