import { Component, OnInit } from '@angular/core';
import { LightsService } from '../../services/lights.service';

@Component({
  selector: 'light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {
  isActivad: boolean = false;
  constructor(private lightsService: LightsService) { }

  ngOnInit() {

  }


  activateLightBtnClicked() {
    if (this.isActivad) {
      this.isActivad = false;
      this.lightsService.stopTimer();
    } else {
      this.isActivad = true;
      this.activateLight();
    }

  }

  async activateLight() {
    let color = await this.lightsService.startTimer();
    this.activateLight();
    console.log(color);
  }


}
