import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { SessionGuard } from '@core/guards/session.guard';
import { AdminPageComponent } from '@modules/admin/pages/admin-page/admin-page.component';
import { roleGuard } from '@core/guards/role.guard';

const routes: Routes = [
  {
    path: 'auth', //TODO: localhost:4200/
    loadChildren: () =>import(`./modules/auth/auth.module`).then(m=>m.AuthModule)
  }, 
  {
    path: 'admin',
    component: AdminPageComponent,
    loadChildren: () =>import(`./modules/admin/admin.module`).then(m=>m.AdminModule),
    canActivate: [roleGuard]
  },
  {
    path: '', //TODO: localhost:4200/
    component: HomePageComponent, //Llamar aqui al componente en lugar de dentro de Home, hace que se redimensione. Luego en home-page component agregamos router-outlet
    loadChildren: () =>import(`./modules/home/home.module`).then(m=>m.HomeModule),
    canActivate: [SessionGuard]
    } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
