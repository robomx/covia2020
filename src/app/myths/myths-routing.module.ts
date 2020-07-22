import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MythsPage } from './myths.page';

const routes: Routes = [
  {
    path: '',
    component: MythsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MythsPageRoutingModule {}
