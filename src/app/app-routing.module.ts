import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'auth', //TODO: localhost:4200/
    loadChildren: () =>import(`./modules/auth/auth.module`).then(m=>m.AuthModule)
  }, 
  {
    path: '', //TODO: localhost:4200/
    component: HomePageComponent, //Llamar aqui al componente en lugar de dentro de Home, hace que se redimensione. Luego en home-page component agregamos router-outlet
    loadChildren: () =>import(`./modules/home/home.module`).then(m=>m.HomeModule)
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
