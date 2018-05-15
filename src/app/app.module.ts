import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2/';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

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
import { ResourceComponent } from './resource/resource.component';
import { ResourceService } from './resource.service';
import { ResourceImporterComponent } from './resource-importer/resource-importer.component';
import { ResourceListComponent } from './resource-list/resource-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TvsComponent,
    DataListComponent,
    CompositionsComponent,
    ScreenFleetComponent,
    CompositionDetailComponent,
    SafeHtmlPipe,
    ResourceComponent,
    ResourceImporterComponent,
    ResourceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [TvService, CompositionService, CompositionSerializerService, ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
