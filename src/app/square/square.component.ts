import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `

  <button nbButton hero status="primary"shape="round" style="width: 100%; height:100%;font-size:9rem;" *ngIf="!value">{{value}}</button>  
  <button nbButton hero status="success" shape="round"style="width: 100%; height:100%;font-size:9rem;"  *ngIf="value == 'X'">{{value}}</button>  
  <button nbButton hero status="warning" shape="round"style="width: 100%; height:100%;font-size:9rem;" *ngIf="value == 'O'">{{value}}</button>  

  `,
  styles: []
})
export class SquareComponent {

    @Input()
    value!: 'X' | 'O';


}
