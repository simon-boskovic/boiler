import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'about-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {}
