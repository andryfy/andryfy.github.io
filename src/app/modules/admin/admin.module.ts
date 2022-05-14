import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { IconsProviderModule } from '@app/icons-provider.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzImageModule } from 'ng-zorro-antd/image';

import { CircuitFormComponent } from '@app/modules/admin/admin-circuit/circuit-form/circuit-form.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CircuitListComponent } from './admin-circuit/circuit-list/circuit-list.component';
import { AdminCircuitComponent } from './admin-circuit/admin-circuit.component';
import { CircuitItemComponent } from './admin-circuit/circuit-item/circuit-item.component';



@NgModule({
  declarations: [
    CircuitFormComponent,
    AdminComponent,
    DashboardComponent,
    CircuitListComponent,
    AdminCircuitComponent,
    CircuitItemComponent
  ],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    AdminRoutingModule,
    SharedModule,
    FlexLayoutModule,
    IconsProviderModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzToolTipModule,
    NzProgressModule,
    NzTabsModule,
    NzSelectModule,
    NzMenuModule,
    NzCheckboxModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzUploadModule,
    NzModalModule,
    NzAvatarModule,
    NzBreadCrumbModule,
    NzBackTopModule,
    NzImageModule
  ]
})
export class AdminModule { }
