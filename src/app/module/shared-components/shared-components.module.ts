import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroBioComponent } from 'src/app/components/Root-module-components/hero-bio/hero-bio.component';
import { HeroBioCardComponent } from 'src/app/components/Root-module-components/hero-bio-card/hero-bio-card.component';
import { HeroBioMComponent } from 'src/app/components/Root-module-components/hero-bio-m/hero-bio-m.component';


import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzImageModule } from 'ng-zorro-antd/image';

import { FormsModule } from '@angular/forms';
import { GetSuperheroesService } from 'src/app/services/get-superheroes.service';

@NgModule({
  declarations: [
    HeroBioComponent,
    HeroBioMComponent,
    HeroBioCardComponent,
    
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzIconModule,
    NzToolTipModule,
    NzButtonModule,
    NzCardModule,
    NzSkeletonModule,
    NzFormModule,
    NzAlertModule,
    NzMenuModule,
    NzModalModule,
    NzImageModule,
    FormsModule
  ],
  exports: [
    HeroBioComponent,
    HeroBioMComponent,
    HeroBioCardComponent
  ],
  providers: [GetSuperheroesService]
})
export class SharedComponentsModule { }
