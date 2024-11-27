import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CachoeirasPageRoutingModule } from './cachoeiras-routing.module';

import { CachoeirasPage } from './cachoeiras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CachoeirasPageRoutingModule
  ],
  declarations: [CachoeirasPage]
})
export class CachoeirasPageModule {}
