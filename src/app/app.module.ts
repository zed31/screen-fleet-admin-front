import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TvService } from './tv.service';
import { TvsComponent } from './tvs/tvs.component';


@NgModule({
  declarations: [
    AppComponent,
    TvsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
