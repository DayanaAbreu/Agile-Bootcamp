import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { AuthService } from '@modules/auth/service/auth.service';
import { BehaviorSubject, Observable, catchError, find, map, tap } from 'rxjs';
import { TrackModel } from '@core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly URL = environment.api

  constructor(private http: HttpClient, private cookie: CookieService) {

   }

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
      name
    }
    return this.http.put(`${this.URL}/tracks/edit/${id}`, body)
  }

  deleteTrack(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/tracks/delete/${id}`)
  }

}
