import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DamacenoPage } from './damaceno.page';

const routes: Routes = [
  {
    path: '',
    component: DamacenoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DamacenoPageRoutingModule {}
