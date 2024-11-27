import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuristicosPage } from './turisticos.page';

const routes: Routes = [
  {
    path: '',
    component: TuristicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuristicosPageRoutingModule {}
