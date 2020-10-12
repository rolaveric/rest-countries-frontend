import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryResolver } from './country.resolver';
import { DetailViewComponent } from './detail-view.component';

const routes: Routes = [
  {
    path: ':name',
    component: DetailViewComponent,
    resolve: {
      country: CountryResolver,
    },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailViewRoutingModule {}
