import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MythsPageRoutingModule } from './myths-routing.module';

import { MythsPage } from './myths.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MythsPageRoutingModule
  ],
  declarations: [MythsPage]
})
export class MythsPageModule {}
