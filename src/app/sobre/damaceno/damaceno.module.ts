import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DamacenoPageRoutingModule } from './damaceno-routing.module';

import { DamacenoPage } from './damaceno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DamacenoPageRoutingModule
  ],
  declarations: [DamacenoPage]
})
export class DamacenoPageModule {}
