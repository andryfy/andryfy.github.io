import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RallongeComponent } from './rallonge.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RallongeItemComponent } from './rallonge-item/rallonge-item.component';


@NgModule({
  declarations: [
    RallongeComponent,
    RallongeItemComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NzDividerModule,
    NzImageModule,
    NzCarouselModule,
    NzMenuModule
  ]
})
export class RallongeModule { }
