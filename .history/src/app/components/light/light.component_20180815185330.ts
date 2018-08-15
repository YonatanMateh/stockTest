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

    } else {

    }

  }

  async activateLight() {
    let color = await this.lightsService.startTimer();
    this.activateLight();
    console.log(color);
  }


}
