import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TvService } from './tv.service';
import { TvsComponent } from './tvs/tvs.component';
import { DataListComponent } from './data-list/data-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TvsComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
