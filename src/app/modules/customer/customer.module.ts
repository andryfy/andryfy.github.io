import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerFeedBackComponent } from './components/customer-feed-back/customer-feed-back.component';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CustomerFeedBackFormComponent } from './components/customer-feed-back-form/customer-feed-back-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerFeedBackComponent,
    CustomerFeedBackFormComponent
  ],
  imports: [
    CommonModule,
    NzCommentModule,
    NzListModule,
    NzAvatarModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
  ]
})
export class CustomerModule { }
