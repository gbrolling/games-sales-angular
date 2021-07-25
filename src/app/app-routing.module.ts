import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { HomeComponent } from './pages/home/home.component';
import { StoresPageComponent } from './pages/stores-page/stores-page.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'games',
    component: GamesPageComponent,
  },
  {
    path: 'stores',
    component: StoresPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
