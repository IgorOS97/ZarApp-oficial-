import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IgorPage } from './igor.page';

const routes: Routes = [
  {
    path: '',
    component: IgorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IgorPageRoutingModule {}
