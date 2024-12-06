import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuristicosPageRoutingModule } from './turisticos-routing.module';

import { TuristicosPage } from './turisticos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuristicosPageRoutingModule
  ],
  declarations: [TuristicosPage]
})
export class TuristicosPageModule {}
