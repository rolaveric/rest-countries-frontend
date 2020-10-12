import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CountryCardComponent } from './country-card/country-card.component';
import { CountryCardsComponent } from './country-cards/country-cards.component';
import { CountrySearchInputComponent } from './country-search-input/country-search-input.component';
import { HomeViewRoutingModule } from './home-view-routing.module';
import { HomeViewComponent } from './home-view.component';
import { RegionFilterInputComponent } from './region-filter-input/region-filter-input.component';

@NgModule({
  imports: [
    // @angular
    CommonModule,
    ReactiveFormsModule,

    // font-awesome
    FontAwesomeModule,

    // routing
    HomeViewRoutingModule,
  ],
  declarations: [
    CountryCardComponent,
    CountryCardsComponent,
    CountrySearchInputComponent,
    HomeViewComponent,
    RegionFilterInputComponent,
  ],
})
export class HomeViewModule {}
