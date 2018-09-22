import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { MyLocationComponent } from './my-location/my-location.component';
import { HostLocationComponent } from './host-location/host-location.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    MyLocationComponent,
    HostLocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
