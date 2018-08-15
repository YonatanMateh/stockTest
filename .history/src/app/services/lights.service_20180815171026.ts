import { Injectable } from '@angular/core';
import { Light } from '../models/Light';
@Injectable()
export class LightsService {
  lights: Light[] = [];
  constructor() { 
    const redLight = new Light('red', 2);
    const yellowLight = new Light('yellow', 1);
    const greenLight = new Light('green', 3);
    this.lights.push(redLight, yellowLight, greenLight);
  }

  activateLight() {
    console.log(this.lights);
  }

}
