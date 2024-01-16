import { Injectable } from '@angular/core';
import { TipoInt } from './tipo-int';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TipiServiceService {
  apiUrl =''

  constructor(private http:HttpClient) { }

  tipoLista:TipoInt[] = [{
    id:0,
    tipo:"fuoco"
  }
]
}
