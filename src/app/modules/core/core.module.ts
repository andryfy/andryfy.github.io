import { CustomerModule } from './../customer/customer.module';
import { RallongeModule } from './../rallonge/rallonge.module';
import { CircuitModule } from './../circuit/circuit.module';
import { HomeModule } from '@home/home.module';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from '../admin/admin.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    AdminModule,
    CircuitModule,
    RallongeModule,
    CustomerModule
  ]
})
export class CoreModule { }
