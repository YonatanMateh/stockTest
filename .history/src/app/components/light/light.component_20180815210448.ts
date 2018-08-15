import { Component, OnInit } from '@angular/core';
import { LightsService } from '../../services/lights.service';

const DEFAULT_LIGHT = 'red';

@Component({
  selector: 'light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {
  isActivad: boolean = false;
  currentColor: string = DEFAULT_LIGHT;
  constructor(private lightsService: LightsService) { }

  ngOnInit() { }

  activateLightBtnClicked() {
    if (this.isActivad) {
      this.lightsService.stopTimer();
      this.currentColor =  DEFAULT_LIGHT;
    } else {
      this.activateLight();
    }
    this.isActivad = !this.isActivad;
  }

  async activateLight() {
    this.currentColor = await this.lightsService.startTimer();
    this.activateLight();
  }
}
