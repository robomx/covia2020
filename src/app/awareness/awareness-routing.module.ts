import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwarenessPage } from './awareness.page';

const routes: Routes = [
  {
    path: '',
    component: AwarenessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwarenessPageRoutingModule {}
