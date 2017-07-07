import { Component } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';
import { RoundProgressConfig } from 'angular-svg-round-progressbar';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        animate('1s ease-in', keyframes([
          style({ opacity: 0, transform: 'translateX(-15px', offset: 0 }),
          style({ opacity: 0.5, transform: 'translateX(0px', offset: .5 }),
          style({ opacity: 1, transform: 'translateX(0px', offset: 1 }),
        ]))
      ])
    ])
  ]
})
export class AppComponent {

  state = 'inactive';

  radius = 70;
  max = 100;
  unity = 60;
  angular = 50;
  ionic = 50;

  constructor(private _config: RoundProgressConfig) {
    PageScrollConfig.defaultDuration = 500;
    _config.setDefaults({
      radius: 70,
      stroke: 10,
      duration: 800,
      rounded: true,
      color: '#16A6B6',
      background: '#E7E7E2',
      animation: 'easeOutCubic',
      animationDelay: 1000
    });
  }

  getOverlayStyle() {
    const transform = 'translateY(-50%) ' + 'translateX(-50%)';
    return {
      'top': '50%',
      'bottom': 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 2 + 'px'
    };
  }
}
