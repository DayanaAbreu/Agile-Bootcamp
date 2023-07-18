import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    //en vez del componente de home, llamamos los otros modulos que van a ir renderizados dentro de la página de home:
    path: 'tracks',
    loadChildren:() => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  }, 
  {
    path: 'favorites',
    loadChildren:() => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'history',
    loadChildren:() => import('@modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: '**',
    redirectTo: '/tracks'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
