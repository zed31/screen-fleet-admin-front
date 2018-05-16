import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ResourceGeneratorComponent } from './resource-generator/resource-generator.component';
import { ScreenFleetComponent } from './screen-fleet/screen-fleet.component';
import { CompositionDetailComponent } from './composition-detail/composition-detail.component';
import { TvGeneratorComponent } from './tv-generator/tv-generator.component';
import { CompositionCreatorComponent } from './composition-creator/composition-creator.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ScreenFleetComponent },
  { path: 'composition/:id', component: CompositionDetailComponent },
  { path: 'generate/resource', component: ResourceGeneratorComponent },
  { path: 'generate/tv', component: TvGeneratorComponent },
  { path: 'generate/composition', component: CompositionCreatorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
