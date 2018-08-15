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
    let light: Light = this.lights[this.currentLight];
    console.log(this.currentLight);
    this.currentLight < 2 ? this.currentLight++ : this.currentLight = 0;
    // if(this.currentLight <= 1 ) {
    //   this.currentLight++;
    // } else {
    //   this.currentLight = 0;
    // }
    return new Promise(resolve => {
      this.timer = setTimeout(() => {
        resolve(light.color);
      }, light.time * 1000);
    });
  }

  stopTimer() {
    clearTimeout(this.timer);
    this.timer = 0;
  }
  startClock() {

  }
}
