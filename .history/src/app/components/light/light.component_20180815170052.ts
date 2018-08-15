import { Component, OnInit } from '@angular/core';
import { LightService } from '../../services/light.service';
@Component({
  selector: 'light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {

  constructor(private lightService: LightService) { }

  ngOnInit() {
  }

   this.lightService.activateLights();

}
