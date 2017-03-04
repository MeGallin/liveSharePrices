import { Component, style, state, animate, transition, trigger } from '@angular/core';

@Component({
  selector: 'lp-fade',
  templateUrl: './fade.component.html',
  styleUrls: ['./fade.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({opacity:0}), //style only for transition transition (after transiton it removes)
        animate(500, style({opacity:1})) // the new state of the transition(after transiton it removes)
      ]),
      transition('* => void', [
        animate(500, style({opacity:0,background:'red'})) // the new state of the transition(after transiton it removes)
      ])
    ])
  ]
})
export class FadeComponent {
  toggle: boolean = false;
  
  constructor() {}
  
  toggleElement(){
     this.toggle=!this.toggle;
  }

}
