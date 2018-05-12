import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TvService } from './tv.service';
import { TvsComponent } from './tvs/tvs.component';
import { DataListComponent } from './data-list/data-list.component';
import { CompositionService } from './composition.service';
import { CompositionsComponent } from './compositions/compositions.component';
import { AppRoutingModule } from './/app-routing.module';
import { ScreenFleetComponent } from './screen-fleet/screen-fleet.component';
import { CompositionDetailComponent } from './composition-detail/composition-detail.component';
import { CompositionSerializerService } from './composition-serializer.service';
import { SafeHtmlPipe } from './safe-html';

@NgModule({
  declarations: [
    AppComponent,
    TvsComponent,
    DataListComponent,
    CompositionsComponent,
    ScreenFleetComponent,
    CompositionDetailComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TvService, CompositionService, CompositionSerializerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
