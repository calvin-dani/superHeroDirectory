import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareComponent } from 'src/app/components/Compare-feature-module/compare/compare.component';

const routes: Routes = [
  { path: '', component: CompareComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompareFeatureModuleRoutingModule { }
