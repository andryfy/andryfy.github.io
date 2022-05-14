import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Circuit } from './models/circuit';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.scss']
})
export class CircuitComponent implements OnInit {


  circuit: Circuit = {...Circuit.EMPTY_MODEL};
  fallback =
  'data:image/png;base64,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';

  circuitList: Circuit[] | any[] = [
    {
      id: 1,
      nom: 'Sainte Marie',
      img: 'sainte-marie-1.jpg',
      etapeList: [
        {
          id: 1,
          nom: 'Princesse Boro Lodge',
          description: `<p class="ql-align-center"><strong style="color: rgb(230, 0, 0);"><u>Lorem ipsum</u></strong></p><p class="ql-align-justify"><u style="color: rgb(102, 185, 102);">Consectetur adipisicing elit</u></p><ul><li class="ql-align-justify">Unde</li><li class="ql-align-justify">culpa</li><li class="ql-align-justify">rerum</li></ul><p><br></p>`,
          img: 'sainte-marie-1.jpg'
        },
        {
          id: 2,
          nom: 'Soanambo Lodge',
          description: `<p class="ql-align-center"><strong style="color: rgb(230, 0, 0);"><u>Lorem ipsum</u></strong></p><p class="ql-align-justify"><u style="color: rgb(102, 185, 102);">Consectetur adipisicing elit</u></p><ul><li class="ql-align-justify">Unde</li><li class="ql-align-justify">culpa</li><li class="ql-align-justify">rerum</li></ul><p><br></p>`,
          img: 'sainte-marie-2.jpg'
        },
        {
          id: 3,
          nom: 'Masoandro Lodge',
          description: `<p class="ql-align-center"><strong style="color: rgb(230, 0, 0);"><u>Lorem ipsum</u></strong></p><p class="ql-align-justify"><u style="color: rgb(102, 185, 102);">Consectetur adipisicing elit</u></p><ul><li class="ql-align-justify">Unde</li><li class="ql-align-justify">culpa</li><li class="ql-align-justify">rerum</li></ul><p><br></p>`,
          img: 'sainte-marie-3.jpg'
        }
      ]
    },
    {
      id: 2,
      nom: 'Nosy Be',
      img: 'nosy-be-1.jpg',
      etapeList: [
        {
          id: 1,
          nom: 'Sakatia Lodge',
          description: `<p class="ql-align-center"><strong style="color: rgb(230, 0, 0);"><u>Lorem ipsum</u></strong></p><p class="ql-align-justify"><u style="color: rgb(102, 185, 102);">Consectetur adipisicing elit</u></p><ul><li class="ql-align-justify">Unde</li><li class="ql-align-justify">culpa</li><li class="ql-align-justify">rerum</li></ul><p><br></p>`,
          img: 'nosy-be-1.jpg'
        },
        {
          id: 2,
          nom: 'Komba Tsara',
          description: `<p class="ql-align-center"><strong style="color: rgb(230, 0, 0);"><u>Lorem ipsum</u></strong></p><p class="ql-align-justify"><u style="color: rgb(102, 185, 102);">Consectetur adipisicing elit</u></p><ul><li class="ql-align-justify">Unde</li><li class="ql-align-justify">culpa</li><li class="ql-align-justify">rerum</li></ul><p><br></p>`,
          img: 'nosy-be-2.jpg'
        },
        {
          id: 3,
          nom: 'Magasoa Lodge',
          description: `<p class="ql-align-center"><strong style="color: rgb(230, 0, 0);"><u>Lorem ipsum</u></strong></p><p class="ql-align-justify"><u style="color: rgb(102, 185, 102);">Consectetur adipisicing elit</u></p><ul><li class="ql-align-justify">Unde</li><li class="ql-align-justify">culpa</li><li class="ql-align-justify">rerum</li></ul><p><br></p>`,
          img: 'nosy-be-3.jpg'
        },
        {
          id: 4,
          nom: 'Vanilla HTL / Exoro Beach',
          description: `<p class="ql-align-center"><strong style="color: rgb(230, 0, 0);"><u>Lorem ipsum</u></strong></p><p class="ql-align-justify"><u style="color: rgb(102, 185, 102);">Consectetur adipisicing elit</u></p><ul><li class="ql-align-justify">Unde</li><li class="ql-align-justify">culpa</li><li class="ql-align-justify">rerum</li></ul><p><br></p>`,
          img: 'nosy-be-4.jpg'
        }
      ]
    },
    {
      id: 3,
      nom: 'Anakao',
      img: 'anakao-1.jpg',
      etapeList: [
        {
          id: 1,
          nom: 'Anakao Ocean Lodge',
          description: `<p class="ql-align-center"><strong style="color: rgb(230, 0, 0);"><u>Lorem ipsum</u></strong></p><p class="ql-align-justify"><u style="color: rgb(102, 185, 102);">Consectetur adipisicing elit</u></p><ul><li class="ql-align-justify">Unde</li><li class="ql-align-justify">culpa</li><li class="ql-align-justify">rerum</li></ul><p><br></p>`,
          img: 'anakao-1.jpg'
        },
        {
          id: 2,
          nom: 'Salary Vezo',
          description: `<p class="ql-align-center"><strong style="color: rgb(230, 0, 0);"><u>Lorem ipsum</u></strong></p><p class="ql-align-justify"><u style="color: rgb(102, 185, 102);">Consectetur adipisicing elit</u></p><ul><li class="ql-align-justify">Unde</li><li class="ql-align-justify">culpa</li><li class="ql-align-justify">rerum</li></ul><p><br></p>`,
          img: 'anakao-2.jpg'
        }
      ]
    },
    {
      id: 4,
      nom: 'Andavadoaka',
      img: 'andavadoaka-1.jpg',
      etapeList: [
        {
          id: 1,
          nom: 'Laguma Beach',
          description: `<p class="ql-align-center"><strong style="color: rgb(230, 0, 0);"><u>Lorem ipsum</u></strong></p><p class="ql-align-justify"><u style="color: rgb(102, 185, 102);">Consectetur adipisicing elit</u></p><ul><li class="ql-align-justify">Unde</li><li class="ql-align-justify">culpa</li><li class="ql-align-justify">rerum</li></ul><p><br></p>`,
          img: 'andavadoaka-1.jpg'
        },
        {
          id: 2,
          nom: 'Olobe Lodge',
          description: `<p class="ql-align-center"><strong style="color: rgb(230, 0, 0);"><u>Lorem ipsum</u></strong></p><p class="ql-align-justify"><u style="color: rgb(102, 185, 102);">Consectetur adipisicing elit</u></p><ul><li class="ql-align-justify">Unde</li><li class="ql-align-justify">culpa</li><li class="ql-align-justify">rerum</li></ul><p><br></p>`,
          img: 'andavadoaka-2.jpg'
        },
        {
          id: 3,
          nom: 'Coco Beach',
          description: `<p class="ql-align-center"><strong style="color: rgb(230, 0, 0);"><u>Lorem ipsum</u></strong></p><p class="ql-align-justify"><u style="color: rgb(102, 185, 102);">Consectetur adipisicing elit</u></p><ul><li class="ql-align-justify">Unde</li><li class="ql-align-justify">culpa</li><li class="ql-align-justify">rerum</li></ul><p><br></p>`,
          img: 'andavadoaka-3.jpg'
        }
      ]
    },

  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelectCircuit(circuit: Circuit): void {
    console.log('CIRCUIT SELECTED: ', circuit);
    
    if (circuit && circuit.id > 0) {
      this.router.navigate(['circuit', circuit.id]);
    }
  }

}
