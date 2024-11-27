import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CachoeirasPage } from './cachoeiras.page';

const routes: Routes = [
  {
    path: '',
    component: CachoeirasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CachoeirasPageRoutingModule {}
