import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

import { Country } from '../../data/country';

@Component({
  selector: 'rcf-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryCardComponent {
  @Input() country: Country;

  @HostListener('click')
  cardClicked(): void {
      this.router.navigate(['country', this.country.name]);
  }

  constructor(private router: Router) {}
}
