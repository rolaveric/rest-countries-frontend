import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';

export interface RegionOption {
  value: string;
  label: string;
}

@Component({
  selector: 'rcf-region-filter-input',
  templateUrl: './region-filter-input.component.html',
  styleUrls: ['./region-filter-input.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionFilterInputComponent {

  @Input() regionOptions: RegionOption[] = [];

  @Output() regionChange = new EventEmitter<string>();

  formControl = new FormControl('');

  constructor() {
    this.formControl.valueChanges.subscribe((value: string) => {
      this.regionChange.emit(value);
    });
  }
}
