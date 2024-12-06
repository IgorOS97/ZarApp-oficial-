import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteudoPage } from './conteudo.page';

const routes: Routes = [
  {
    path: '',
    component: ConteudoPage,
    children: [
      {
        path: 'inicial',
        loadChildren: () =>
          import('./inicial/inicial.module').then(m => m.InicialPageModule),
      },
      {
        path: 'mapa',
        loadChildren: () =>
          import('./mapa/mapa.module').then(m => m.MapaPageModule),
      },
      {
        path: 'idiomas',
        loadChildren: () =>
          import('./idiomas/idiomas.module').then(m => m.IdiomasPageModule),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('./perfil/perfil.module').then(m => m.PerfilPageModule),
      },
      {
        path: '',
        redirectTo: 'inicial',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConteudoPageRoutingModule {}
