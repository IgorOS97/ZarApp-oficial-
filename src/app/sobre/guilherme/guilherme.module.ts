import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuilhermePageRoutingModule } from './guilherme-routing.module';

import { GuilhermePage } from './guilherme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuilhermePageRoutingModule
  ],
  declarations: [GuilhermePage]
})
export class GuilhermePageModule {}
