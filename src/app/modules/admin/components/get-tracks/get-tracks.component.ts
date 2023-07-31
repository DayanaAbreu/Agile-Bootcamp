import { KeyValuePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TrackModel } from '@core/models/tracks.model';
import { AdminService } from '@modules/admin/services/admin.service';
import { MultimediaService } from '@shared/service/multimedia.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UpdateTrackComponent } from '../update-track/update-track.component';
import { AdminPageComponent } from '@modules/admin/pages/admin-page/admin-page.component';

@Component({
  selector: 'app-get-tracks',
  templateUrl: './get-tracks.component.html',
  styleUrls: ['./get-tracks.component.css'],
})
export class GetTracksComponent implements OnInit, OnChanges {
  updateStatus = 0;
  private readonly URL = environment.api

  @Input() tracks: Array<TrackModel> = [] //Es lo mismo que tracks: TrackModel[] = []
  @Input() newTrack: any
  @Input() agregado = false
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc'}

  data = ''
  numeroTrack: number | null = null

  @ViewChild(AdminPageComponent) 'child' = new AdminPageComponent

  constructor(
    private multimediaService: MultimediaService, 
    private adminService: AdminService,
    private cookie: CookieService,
    private router: Router) {}


    ngOnInit():void {
      
      this.loadDataAll()      
      }

      ngOnChanges(changes: SimpleChanges): void {
        this.addANewTrack()
      }


    async loadDataAll(): Promise<any> {
      this.tracks = await this.multimediaService.getAllTracks$().toPromise()
    }


    changeSort(property: string): void {
      const { order } = this.optionSort
      this.optionSort = {
        property,
        order: order === 'asc' ? 'desc' : 'asc'
      }
      console.log(this.optionSort);
    }

    getTrackId2(id: number | string, name: string ): void {
          this.cookie.set('idTrack', id.toString(), 4, '/')
          this.cookie.set('trackName', name, 4, '/')
          const cookie1= this.cookie.get('idTrack')
          const cookie2= this.cookie.get('trackName')
          console.log(cookie1, cookie2)
      }

    sendTrackDelete(): void {
      const id = this.cookie.get('idTrack')
      this.adminService.deleteTrack(id)
        .subscribe(responseOk => {
          console.log('Track eliminado', responseOk)
          this.loadDataAll()
        })
        
    }

    setIndice(indice: number | null) {
      this.numeroTrack = indice
    }

    resetIndice(indice: number | null): void {
      this.numeroTrack= indice
    }

    sendUpdateTrack(event: any): void {
      console.log(event.name)
      this.adminService.updateTrack(event.id, event.name)
      .subscribe(responseOk => {
        console.log('Track actualizado correctamente', responseOk)
        this.loadDataAll();
      })
    }    

    addANewTrack(): void {
        console.log('el objeto es', this.newTrack)
        this.adminService.sendTrack(this.newTrack.name, this.newTrack.album, this.newTrack.cover, this.newTrack.artist)
          .subscribe(responseOk => {
            console.log('Track agregado correctamente', responseOk)
            this.loadDataAll();
          })
    }

  ngOnDestroy(): void {

  }
  
}
