import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AwarenessPageRoutingModule } from './awareness-routing.module';

import { AwarenessPage } from './awareness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AwarenessPageRoutingModule
  ],
  declarations: [AwarenessPage]
})
export class AwarenessPageModule {}
