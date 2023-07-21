import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthModule } from '@modules/auth/auth.module';
import { SharedModule } from "../../shared/shared.module";
import { NewTrackComponent } from './components/new-track/new-track.component';
import { UpdateTrackComponent } from './components/update-track/update-track.component';
import { GetTracksComponent } from './components/get-tracks/get-tracks.component';


@NgModule({
    declarations: [
        AdminPageComponent,
        NewTrackComponent,
        UpdateTrackComponent,
        GetTracksComponent,
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
