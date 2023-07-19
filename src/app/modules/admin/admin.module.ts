import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthModule } from '@modules/auth/auth.module';
import { SharedModule } from "../../shared/shared.module";
import { NewTrackComponent } from './components/crud/new-track/new-track.component';
import { UpdateTrackComponent } from './components/update-track/update-track.component';


@NgModule({
    declarations: [
        AdminPageComponent,
        NewTrackComponent,
        UpdateTrackComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        AuthModule,
        SharedModule
    ]
})
export class AdminModule { }
