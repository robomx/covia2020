import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'myths',
    loadChildren: () => import('./myths/myths.module').then( m => m.MythsPageModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./questions/questions.module').then( m => m.QuestionsPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./news/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'awareness',
    loadChildren: () => import('./awareness/awareness.module').then( m => m.AwarenessPageModule)
  },
  {
    path: 'helpline',
    loadChildren: () => import('./helpline/helpline.module').then( m => m.HelplinePageModule)
  },
    {
    path: 'resources',
    loadChildren: () => import('./resources/resources.module').then( m => m.ResourcesPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'barometer',
    loadChildren: () => import('./barometer/barometer.module').then( m => m.BarometerPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
