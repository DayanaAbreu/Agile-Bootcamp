import { KeyValuePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TrackModel } from '@core/models/tracks.model';
import { AdminService } from '@modules/admin/services/admin.service';
import { MultimediaService } from '@shared/service/multimedia.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-get-tracks',
  templateUrl: './get-tracks.component.html',
  styleUrls: ['./get-tracks.component.css'],
})
export class GetTracksComponent implements OnInit, OnChanges{
  private readonly URL = environment.api
  
  @Input() tracks: Array<TrackModel> = [] //Es lo mismo que tracks: TrackModel[] = []
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc'}

  numeroTrack: number | null = null

  constructor(private multimediaService: MultimediaService, 
    private adminService: AdminService,
    private cookie: CookieService,
    private router: Router) {}

    ngOnChanges(changes: SimpleChanges): void {
 
    }

    ngOnInit():void {
      this.loadDataAll()
      
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
    

  ngOnDestroy(): void {

  }
  
}
