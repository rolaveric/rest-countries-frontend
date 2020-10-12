import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'rcf-country-cards',
  templateUrl: './country-cards.component.html',
  styleUrls: ['./country-cards.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryCardsComponent {}
