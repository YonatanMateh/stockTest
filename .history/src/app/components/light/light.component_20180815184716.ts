import { Component, OnInit } from '@angular/core';
import { LightsService } from '../../services/lights.service';

@Component({
  selector: 'light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {

  constructor(private lightsService: LightsService) { }

  ngOnInit() {
   
  }
   

 async activateLight() {
  let color = await this.lightsService.activateLight();
  this.activateLight();
  console.log(color);
  }
  

}
