import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircuitComponent } from './circuit.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CircuitListComponent } from './components/circuit-list/circuit-list.component';
import { CircuitItemComponent } from './components/circuit-item/circuit-item.component';


@NgModule({
  declarations: [
    CircuitComponent,
    CircuitListComponent,
    CircuitItemComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    QuillModule,
    NzDividerModule,
    NzImageModule,
    NzCarouselModule,
    NzMenuModule
  ]
})
export class CircuitModule { }
