import { Injectable } from '@angular/core';
import { Light } from '../models/Light';
@Injectable()
export class LightsService {
  lights: Light[] = [];
  nextLight: number = 0;
  timer;
  constructor() {
    const redLight = new Light('red', 2);
    const yellowLight = new Light('yellow', 4);
    const greenLight = new Light('green', 5);
    this.lights.push(redLight, yellowLight, greenLight);
  }

  startTimer(): Promise<string> {
    let light: Light = this.lights[this.nextLight];
    this.nextLight < 2 ? this.nextLight++ : this.nextLight = 0;
    console.log(light.time, light.color);
    return new Promise(resolve => {
      this.timer = setTimeout(() => {
        resolve(light.color);
      }, light.time * 1000);
    });
  }

  stopTimer(): void {
    clearTimeout(this.timer);
    this.timer = 0;
    this.nextLight = 0;
  }
}
