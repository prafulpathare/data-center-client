import { Component, Input } from '@angular/core';

@Component({
  selector: 'jp-card',
  templateUrl: './jp-card.component.html',
  styleUrls: ['./jp-card.component.scss']
})
export class JpCardComponent {


  @Input('title') title: string = '';
  @Input('value') value: any = undefined;
  @Input('severity') severity: any = undefined;


}
