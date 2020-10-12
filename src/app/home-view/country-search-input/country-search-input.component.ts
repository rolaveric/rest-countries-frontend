import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rcf-country-search-input',
  templateUrl: './country-search-input.component.html',
  styleUrls: ['./country-search-input.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountrySearchInputComponent {
  @Output() queryChange = new EventEmitter<string>();

  formControl = new FormControl();

  fasSearch = faSearch;

  constructor() {
    this.formControl.valueChanges.subscribe((value: string) => {
      this.queryChange.emit(value);
    });
  }
}
