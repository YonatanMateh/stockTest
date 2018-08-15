import { Component, OnInit } from '@angular/core';
import { LightsService } from '../../services/lights.service';

@Component({
  selector: 'light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {
  isActivad: boolean = false;
  currentColor: string;
  constructor(private lightsService: LightsService) { }

  ngOnInit() {

  }


  activateLightBtnClicked() {
    if (this.isActivad) {
      // this.isActivad = false;
      this.lightsService.stopTimer();
    } else {
      // this.isActivad = true;
      this.activateLight();
    }
    this.isActivad = !this.isActivad;

  }

  async activateLight() {
    this.currentColor = await this.lightsService.startTimer();
    this.activateLight();
  }
}
