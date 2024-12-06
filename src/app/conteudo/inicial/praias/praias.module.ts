import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PraiasPageRoutingModule } from './praias-routing.module';

import { PraiasPage } from './praias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PraiasPageRoutingModule
  ],
  declarations: [PraiasPage]
})
export class PraiasPageModule {}
