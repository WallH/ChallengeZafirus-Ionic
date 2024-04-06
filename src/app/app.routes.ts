import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/superhero/superherolist/superherolist.page').then( m => m.SuperherolistPage)
  },
  {
    path: 'detail',
    loadComponent: () => import('./pages/superhero/detail/detail.page').then( m => m.DetailPage)
  },
];
