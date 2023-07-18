import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { AuthService } from '@modules/auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly URL = environment.api
  constructor(private http: HttpClient, private cookie: CookieService) { }

  
}
