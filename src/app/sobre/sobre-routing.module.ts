import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobrePage } from './sobre.page';

const routes: Routes = [
  {
    path: '',
    component: SobrePage,
    children: [
      {
        path: 'damaceno',
        loadChildren: () =>
          import('./damaceno/damaceno.module').then(m => m.DamacenoPageModule),
      },
      {
        path: 'igor',
        loadChildren: () =>
          import('./igor/igor.module').then(m => m.IgorPageModule),
      },
      {
        path: 'guilherme',
        loadChildren: () =>
          import('./guilherme/guilherme.module').then(m => m.GuilhermePageModule),
      },
      {
        path: '',
        redirectTo: 'damaceno',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobrePageRoutingModule {}
