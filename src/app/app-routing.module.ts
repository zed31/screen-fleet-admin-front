import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ScreenFleetComponent } from './screen-fleet/screen-fleet.component';
import { CompositionDetailComponent } from './composition-detail/composition-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ScreenFleetComponent },
  { path: 'composition/:id', component: CompositionDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
