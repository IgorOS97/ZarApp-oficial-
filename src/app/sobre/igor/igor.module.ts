import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IgorPageRoutingModule } from './igor-routing.module';

import { IgorPage } from './igor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IgorPageRoutingModule
  ],
  declarations: [IgorPage]
})
export class IgorPageModule {}
