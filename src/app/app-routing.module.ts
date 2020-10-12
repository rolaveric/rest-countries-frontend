import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home-view/home-view.module').then(
        (m) => m.HomeViewModule
      ),
  },
  {
    path: 'country',
    loadChildren: () =>
      import('./detail-view/detail-view.module').then(
        (m) => m.DetailViewModule
      ),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
