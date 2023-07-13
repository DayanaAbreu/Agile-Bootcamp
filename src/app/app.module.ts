import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { InjectTokenInterceptor } from '@core/interceptors/inject-token.interceptor';

@NgModule({ 
  declarations: [//declaraciones, directivas, pipes...
  AppComponent,
  
],
  imports: [ //Solo se importan otros modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InjectTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
