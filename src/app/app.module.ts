import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 


import { AppComponent } from './app.component';
import { LightComponent } from './components/light/light.component';
import { LightsService } from './services/lights.service';
@NgModule({
  declarations: [
    AppComponent,
    LightComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [LightsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
