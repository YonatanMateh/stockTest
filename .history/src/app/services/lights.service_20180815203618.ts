import { Injectable } from '@angular/core';
import { Light } from '../models/Light';
@Injectable()
export class LightsService {
  lights: Light[] = [];
  nextLightIndex: number = 0;
  timer;
  constructor() {
    // the time refers to the previus light in line
    const redLight = new Light('red', 5);
    const yellowLight = new Light('yellow', 2);
    const greenLight = new Light('green', 3);
    this.lights.push(redLight, yellowLight, greenLight);
  }

  startTimer(): Promise<string> {
    let light: Light = this.lights[this.nextLightIndex];
    this.nextLightIndex < 2 ? this.nextLightIndex++ : this.nextLightIndex = 0;
    let nextLight: Light = this.lights[this.nextLightIndex];
    console.log(light.time, light.color);
    return new Promise(resolve => {
      this.timer = setTimeout(() => {
        resolve(nextLight.color);
      }, light.time * 1000);
    });
  }

  stopTimer(): void {
    clearTimeout(this.timer);
    this.timer = 0;
    this.nextLightIndex = 0;
  }
}
