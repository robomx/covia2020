import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelplinePageRoutingModule } from './helpline-routing.module';

import { HelplinePage } from './helpline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelplinePageRoutingModule
  ],
  declarations: [HelplinePage]
})
export class HelplinePageModule {}
