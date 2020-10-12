import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { faMoon as farMoon } from '@fortawesome/free-regular-svg-icons';
import {
  faMoon as fasMoon,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import { ThemeService } from '../../theme.service';

@Component({
  selector: 'rcf-dark-mode-control',
  templateUrl: './dark-mode-control.component.html',
  styleUrls: ['./dark-mode-control.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkModeControlComponent {
  faMoon: IconDefinition;

  constructor(private themeService: ThemeService) {
    this.setIcon();
  }

  buttonClicked(): void {
    this.themeService.toggleTheme();
    this.setIcon();
  }

  private setIcon(): void {
    this.faMoon = this.themeService.isDarkTheme() ? fasMoon : farMoon;
  }
}
