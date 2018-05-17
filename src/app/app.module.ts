import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2/';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';

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
import { ResourceUploaderService } from './resource-uploader.service';
import { ResourceGeneratorComponent } from './resource-generator/resource-generator.component';
import { ResourceFormComponent } from './resource-form/resource-form.component';
import { TvGeneratorComponent } from './tv-generator/tv-generator.component';
import { CompositionCreatorComponent } from './composition-creator/composition-creator.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';
import { CompositionImporterComponent } from './composition-importer/composition-importer.component';
import { TvApiService } from './tv-api.service';
import { ResourcesComponent } from './resources/resources.component';

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
    ResourceListComponent,
    ResourceGeneratorComponent,
    ResourceFormComponent,
    TvGeneratorComponent,
    CompositionCreatorComponent,
    TvDetailComponent,
    CompositionImporterComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TvService, CompositionService, CompositionSerializerService, ResourceService, ResourceUploaderService, TvApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
