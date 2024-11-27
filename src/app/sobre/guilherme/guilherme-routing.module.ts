import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuilhermePage } from './guilherme.page';

const routes: Routes = [
  {
    path: '',
    component: GuilhermePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuilhermePageRoutingModule {}
