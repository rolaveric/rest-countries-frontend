import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DarkModeControlComponent } from './dark-mode-control/dark-mode-control.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    // font-awesome
    FontAwesomeModule
  ],
  declarations: [DarkModeControlComponent, HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
