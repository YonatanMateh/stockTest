import { Injectable } from '@angular/core';
import { Light } from '../models/Light';

@Injectable()
export class LightsService {
  private lights: Light[] = [];
  private currentIndex: number = 0;
  private timer;
  constructor() {
    const redLight = new Light('red', 5);
    const yellowLight = new Light('yellow', 2);
    const greenLight = new Light('green', 3);
    this.lights.push(redLight, yellowLight, greenLight);
  }

  startTimer(): Promise<string> {
    let light: Light = this.lights[this.currentIndex];
    this.currentIndex < 2 ? this.currentIndex++ : this.currentIndex = 0;
    let nextLight: Light = this.lights[this.currentIndex];

    // waiting x time for the current light, when finished the time,
    // returning the next light color
    return new Promise(resolve => {
      this.timer = setTimeout(() => {
        resolve(nextLight.color);
      }, light.time * 1000);
    });
  }

  stopTimer(): void {
    clearTimeout(this.timer);
    this.timer = 0;
    this.currentIndex = 0;
  }
}
