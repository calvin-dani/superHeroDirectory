import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/Root-module-components/home/home.component';
import { HeroBioComponent } from './components/Root-module-components/hero-bio/hero-bio.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Hero-Bio', component: HeroBioComponent },
  {
    path: 'Compare',
    loadChildren: () => import('./module/compare-feature-module/compare-feature-module.module').then(m => m.CompareFeatureModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
