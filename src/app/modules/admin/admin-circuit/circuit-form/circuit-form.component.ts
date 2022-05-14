import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Circuit } from '@app/modules/circuit/models/circuit';
import { CircuitService } from '@app/modules/circuit/services/circuit.service';

@Component({
  selector: 'app-circuit-form',
  templateUrl: './circuit-form.component.html',
  styleUrls: ['./circuit-form.component.scss']
})
export class CircuitFormComponent implements OnInit {
  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'align': [] }],

      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme

      ['link'],                   // link and image, video

      [{ 'direction': 'rtl' }],                       // text direction
      ['blockquote']
    ]
  };

  newCircuit: Circuit = { ...Circuit.EMPTY_MODEL };

  previewImage: string | any = '';

  constructor(private activatedRoute: ActivatedRoute,
    private nzMessageService: NzMessageService,
    private circuitService: CircuitService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routerParams => {
      console.log('PARAMS: ', routerParams)
      if (routerParams.circuitId && +routerParams.circuitId > 0) {
        this.circuitService.getOne(+routerParams.circuitId).subscribe(
          res => {
            console.log('EDIT: ', res);
            if (res.success) {
              this.newCircuit = res.data;
              this.previewImage = this.newCircuit.img;
            }
          },
          err => {
            console.error('GET CIRCUIT ERROR: ', err);
          }
        )
      }
    })
  }

  onFocus(event: any): void {
    console.log('FOCUSED: ', event);
  }

  onBlur(event: any): void {
    console.log('BLURED: ', event);
  }

  onChanged(event: any): void {
    console.log('CHANGED: ', event);
  }

  onCreated(event: any): void {
    console.log('CREATED: ', event);
  }
  
  onSelectedFile(event: any): void {
    console.log('FILE SELECTED: ', event);
    this.newCircuit.img = event.target.files[0];
    // this.previewImage = this.readImageAsDataURL(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event: any) => {
      this.previewImage = reader.result;
    }
  }

  readImageAsDataURL(file: Blob): any {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    let image: any;
    reader.onload = (_event: any) => {
      image = reader.result;
    }
    return image;
  }

  save(newCircuit: Circuit): void {
    console.log('NEW CIRCUIT: ', newCircuit);
    
    if (this.newCircuit.id && this.newCircuit.id > 0) {
      this.circuitService.update(newCircuit).subscribe(
        res => {
          console.log('UPDATED WITH SUCCESS: ', res);
          this.nzMessageService.info('Modifier avec succès');
        },
        err => {
          console.error('ERROR UPDATED: ', err);
        }
      )
    } else {
      this.circuitService.create(newCircuit).subscribe(
        res => {
          console.log('CREATED WITH SUCCESS: ', res);
          this.nzMessageService.info('Ajouter avec succès');
        },
        err => {
          console.error('ERROR CREATED: ', err);
        }
      );
    }
  }
}
