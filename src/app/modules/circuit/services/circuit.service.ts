import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env';
import { Circuit } from '../models/circuit';

let { serverUri } = environment;
serverUri = `${serverUri}/circuit`;

const httpOptions: any = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/data',
    'Accept': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CircuitService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${serverUri}/all`);
  }

  getOne(circuitId: number): Observable<any> {
    return this.http.get(`${serverUri}/${circuitId}`);
  }

  create(newCircuit: Circuit): Observable<any> {
    // @ts-ignore
    delete newCircuit.id;
    // @ts-ignore
    delete newCircuit.etapeList;

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/data');
    headers.append('Accept', 'application/json');

    let formData: FormData = new FormData();

    console.log('ENTRIES: ', Object.entries(newCircuit));

    Object.entries(newCircuit).forEach((entry: any) => {
      let name = entry[0] === 'img' ? 'circuit-attachment' : entry[0];
      let value = entry[1];
      formData.append(name, value);
    });
    return this.http.post(`${serverUri}/new`, formData, { headers: headers });
  }

  update(newCircuit: Circuit): Observable<any> {
    const circuitId = newCircuit.id;
    // @ts-ignore
    delete newCircuit.id;
    // @ts-ignore
    delete newCircuit.etapeList;

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/data');
    headers.append('Accept', 'application/json');

    let formData: FormData = new FormData();

    console.log('ENTRIES: ', Object.entries(newCircuit));

    Object.entries(newCircuit).forEach((entry: any) => {
      let name = entry[0] === 'img' ? 'circuit-attachment' : entry[0];
      let value = entry[1];
      console.log(name, value);
      
      formData.append(name, value);
    });
    return this.http.put(`${serverUri}/edit/${circuitId}`, formData, { headers: headers });
  }

  deleteOne(circuit: Circuit): Observable<any> {
    return this.http.delete(`${serverUri}/delete/${circuit.id}`);
  }
}
