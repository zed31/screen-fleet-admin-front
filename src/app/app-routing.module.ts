import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ResourceGeneratorComponent } from './resource-generator/resource-generator.component';
import { ScreenFleetComponent } from './screen-fleet/screen-fleet.component';
import { CompositionDetailComponent } from './composition-detail/composition-detail.component';
import { TvGeneratorComponent } from './tv-generator/tv-generator.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ScreenFleetComponent },
  { path: 'composition/:id', component: CompositionDetailComponent },
  { path: 'resource/generate', component: ResourceGeneratorComponent },
  { path: 'tv/generate', component: TvGeneratorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
