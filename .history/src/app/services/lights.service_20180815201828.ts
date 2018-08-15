import { Injectable } from '@angular/core';
import { Light } from '../models/Light';
@Injectable()
export class LightsService {
  lights: Light[] = [];
  currentLight: number = 0;
  timer;
  constructor() {
    const redLight = new Light('red', 6);
    const yellowLight = new Light('yellow', 1);
    const greenLight = new Light('green', 1);
    this.lights.push(redLight, yellowLight, greenLight);
  }

  startTimer(): Promise<string> {
    let light: Light = this.lights[this.currentLight];
    this.currentLight < 2 ? this.currentLight++ : this.currentLight = 0;
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
    this.currentLight = 1;
  }
}
