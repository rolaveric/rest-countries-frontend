import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DetailViewRoutingModule } from './detail-view-routing.module';
import { DetailViewComponent } from './detail-view.component';

@NgModule({
  imports: [
    // @angular
    CommonModule,

    // font-awesome
    FontAwesomeModule,

    // routing
    DetailViewRoutingModule,
  ],
  declarations: [DetailViewComponent],
})
export class DetailViewModule {}
