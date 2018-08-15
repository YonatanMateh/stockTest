import { Injectable } from '@angular/core';
import { Light } from '../models/Light';
@Injectable()
export class LightsService {
  lights: Light[] = [];
  currentLight: number = 0;
  timer;
  constructor() {
    const redLight = new Light('red', 2);
    const yellowLight = new Light('yellow', 1);
    const greenLight = new Light('green', 3);
    this.lights.push(redLight, yellowLight, greenLight);
  }

  startTimer() {
    console.log(this.currentLight);
    let light: Light = this.lights[this.currentLight];
    if( this.currentLight <= 2 ) {
      this.currentLight = 0
    } else {
      this.currentLight++;
    }
    return new Promise(resolve => {
      this.timer = setTimeout(() => {
        resolve(light.color);
      }, light.time * 1000);
    });
  }

  stopTimer() {
    console.log(typeof this.timer);
    clearTimeout(this.timer);
    this.timer = 0;
  }
  startClock() {

  }
}
