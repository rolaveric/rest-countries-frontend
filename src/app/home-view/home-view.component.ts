import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { HomeViewModel } from './home-view.model';

@Component({
  selector: 'rcf-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HomeViewModel]
})
export class HomeViewComponent {
  constructor(public model: HomeViewModel) {}
}
