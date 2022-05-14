import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Circuit } from '@app/modules/circuit/models/circuit';
import { CircuitService } from '@app/modules/circuit/services/circuit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circuit-list',
  templateUrl: './circuit-list.component.html',
  styleUrls: ['./circuit-list.component.scss']
})
export class CircuitListComponent implements OnInit {
  circuitList: Circuit[] = [];

  constructor(private router: Router,
    private circuitService: CircuitService,
    private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
    this.getAllCircuit();
  }


  handleSelect(data: Circuit): void {
    console.log('SELECTED: ', data);
    this.router.navigate(['/admin/circuit/edit', data.id]);
  }

  getAllCircuit(): void {
    this.circuitService.getAll().subscribe(
      res => {
        console.log(res);
        this.circuitList = res.data;
      },
      err => {
        console.error('GET ALL CIRCUIT ERROR: ', err);
      }
    );
  }

  remove(toRemove: Circuit): void {
    console.log('TO REMOVE: ', toRemove);
    this.circuitService.deleteOne(toRemove).subscribe(
      res => {
        console.log(res);
        this.getAllCircuit();
        this.nzMessageService.info('Supprimé avec succès');
      },
      err => {
        console.error('ERROR: ', err);
      }
    )
  }

}
