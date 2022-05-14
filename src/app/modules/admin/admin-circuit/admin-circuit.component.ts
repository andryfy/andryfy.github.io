import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-circuit',
  templateUrl: './admin-circuit.component.html',
  styleUrls: ['./admin-circuit.component.scss']
})
export class AdminCircuitComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.router.navigate(['/admin/circuit/new']);
  }
}
