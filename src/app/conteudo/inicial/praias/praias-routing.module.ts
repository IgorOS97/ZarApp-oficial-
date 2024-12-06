import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PraiasPage } from './praias.page';

const routes: Routes = [
  {
    path: '',
    component: PraiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PraiasPageRoutingModule {}
