import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconsProviderModule } from '@app/icons-provider.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IconsProviderModule,
    FlexLayoutModule,
    FormsModule,
    NzLayoutModule,
    NzDividerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
