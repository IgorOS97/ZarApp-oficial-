import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaPage } from './mapa.page';
import { IonicModule } from '@ionic/angular';  // Adicione esta linha

@NgModule({
  imports: [
    CommonModule,
    IonicModule,  // Certifique-se de que o IonicModule esteja aqui
  ],
  declarations: [MapaPage],
  providers: [],
})
export class MapaPageModule {}
