import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CircuitFormComponent } from './admin-circuit/circuit-form/circuit-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminCircuitComponent } from './admin-circuit/admin-circuit.component';
import { CircuitListComponent } from './admin-circuit/circuit-list/circuit-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
        {path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'},
        {path: 'dashboard', component: DashboardComponent},
        {path: 'circuit', children: [
          {path: '', component: AdminCircuitComponent, children: [
            {path: '', component: CircuitListComponent},
            {path: 'new', component: CircuitFormComponent},
            {path: 'edit/:circuitId', component: CircuitFormComponent}
          ]},
        ]}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
