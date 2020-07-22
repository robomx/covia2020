import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarometerPageRoutingModule } from './barometer-routing.module';

import { BarometerPage } from './barometer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarometerPageRoutingModule
  ],
  declarations: [BarometerPage]
})
export class BarometerPageModule {}
