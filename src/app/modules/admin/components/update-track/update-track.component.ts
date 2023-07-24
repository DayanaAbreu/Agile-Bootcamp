import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrackModel } from '@core/models/tracks.model';
import { AdminService } from '@modules/admin/services/admin.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-update-track',
  templateUrl: './update-track.component.html',
  styleUrls: ['./update-track.component.css']
})
export class UpdateTrackComponent implements OnInit {

  formAdmin: UntypedFormGroup = new UntypedFormGroup({});

  constructor(public adminService: AdminService, public cookie: CookieService, private router: Router) {}

  ngOnInit(): void {
    this.formAdmin = new UntypedFormGroup(
      {
        name: new UntypedFormControl('', [
          Validators.required,
        ])
      }
    )
  }

  sendUpdatedTrack(): void {
    const { name } = this.formAdmin.value
    const id = this.cookie.get('idTrack')
    this.adminService.updateTrack(id, name)
      .subscribe(responseOk => {
        console.log('Track actualizado correctamente', responseOk)
        this.router.navigate(['/', 'tracks'])
      })
  }
}
