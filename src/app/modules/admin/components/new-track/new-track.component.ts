import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '@modules/admin/services/admin.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-new-track',
  templateUrl: './new-track.component.html',
  styleUrls: ['./new-track.component.css']
})
export class NewTrackComponent implements OnInit {

  formAdmin: UntypedFormGroup = new UntypedFormGroup({});

  constructor(public adminService: AdminService, public cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.formAdmin = new UntypedFormGroup(
      {
        name: new UntypedFormControl('', [
          Validators.required,
        ]),
        album: new UntypedFormControl('', [
          Validators.required,
        ]),
        cover: new UntypedFormControl('', [
          Validators.required,
        ]),
        artist: new UntypedFormControl('', [
        ])
      }
    )
  }

  sendNewTrack(): void {
    const { name, album, cover, artist } = this.formAdmin.value
    this.adminService.sendTrack(name, album, cover, artist)
      .subscribe(responseOk => {
        console.log('Track agregado correctamente', responseOk)
        this.router.navigate(['/', 'tracks'])
      })
  }

}