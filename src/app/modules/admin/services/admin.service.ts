import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { AuthService } from '@modules/auth/service/auth.service';
import { Observable, catchError, map, tap } from 'rxjs';
import { TrackModel } from '@core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly URL = environment.api

  track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };

  constructor(private http: HttpClient, private cookie: CookieService) { }

  /*Forma con un solo elemento. Pero necesito trabajar con formulario reactivo
    createTrack$(track: TrackModel): Observable<TrackModel> {
    return this.http.post<TrackModel>(`${this.URL}/tracks/add`, track, this.httpOptions)
  }*/

  getAllTracks(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }: any) => {
        return data
      })
    )
  }

  sendTrack(name: string, album: string, cover: string, artist: string): Observable<any> {
    const body = {
      name,
      album,
      cover,
      artist
    }
    return this.http.post(`${this.URL}/tracks/add`, body)
  }

  updateTrack(id: string, name: string): Observable<any> {
    const body = {
      id,
      name
    }
    return this.http.put(`${this.URL}/tracks/edit/${id}`, body)
  }


  
}
