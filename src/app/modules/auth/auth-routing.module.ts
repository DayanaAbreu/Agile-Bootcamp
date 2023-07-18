import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

const routes: Routes = [
  {path: 'login',
  component: AuthPageComponent 
  },
  /*{
    path: '**', //Para decirle en referencia a cualquier ruta de este auth
    redirectTo: '/auth/login'
  }*/
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
