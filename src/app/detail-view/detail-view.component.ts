import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { DetailViewModel } from './detail-view.model';

@Component({
  selector: 'rcf-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DetailViewModel],
})
export class DetailViewComponent {
  faArrowLeft = faArrowLeft;

  constructor(public model: DetailViewModel) {}
}
