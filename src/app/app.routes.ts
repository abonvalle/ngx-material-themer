import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'v17.2', loadComponent: () => import('./v17_2/v17_2.component').then((m) => m.V17_2Component) },
  { path: '**', redirectTo: 'v17.2', pathMatch: 'full' }
];
