import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ScreenFleetComponent } from './screen-fleet/screen-fleet.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: ScreenFleetComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
