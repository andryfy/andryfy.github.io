import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RallongeComponent } from '../rallonge/rallonge.component';
import { RallongeItemComponent } from '../rallonge/rallonge-item/rallonge-item.component';
import { CircuitComponent } from '../circuit/circuit.component';
import { CustomerComponent } from '../customer/customer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './home.component';
import { CircuitItemComponent } from '../circuit/components/circuit-item/circuit-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: WelcomeComponent},
        {path: 'rallonge', component: RallongeComponent},
        {path: 'rallonge/:rallongeId', component: RallongeItemComponent},
        {path: 'circuit', component: CircuitComponent},
        {path: 'circuit/:circuitId', component: CircuitItemComponent},
        {path: 'customer/feed-back', component: CustomerComponent}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
