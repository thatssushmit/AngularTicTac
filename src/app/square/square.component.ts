import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `

  <button nbButton fullWidth style="height: 200px;">{{value}}</button>  
  `,
  styles: []
})
export class SquareComponent {

    @Input()
    value!: 'X' | 'O';


}
