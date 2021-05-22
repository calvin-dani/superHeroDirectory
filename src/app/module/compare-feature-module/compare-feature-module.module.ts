import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompareFeatureModuleRoutingModule } from './compare-feature-module-routing.module';
import { CompareComponent } from 'src/app/components/Compare-feature-module/compare/compare.component';
import { CompareCardComponent } from '../../components/Compare-feature-module/compare-card/compare-card.component';


import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  declarations: [
    CompareComponent,
    CompareCardComponent
  ],
  imports: [
    CommonModule,
    CompareFeatureModuleRoutingModule,
    NzFormModule,
    NzButtonModule,
    FormsModule,
    SharedComponentsModule
  ]
})
export class CompareFeatureModuleModule { }
