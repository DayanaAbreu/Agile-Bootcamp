import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '@modules/admin/services/admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  botonTrack= false

  constructor(private adminService: AdminService, private router: Router) {}

  pressNewTrack() {
    this.botonTrack= true
  }

 
}
