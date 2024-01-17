import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypePokemon } from './type-pokemon';

@Injectable({
  providedIn: 'root'
})

export class TipiServiceService {
  apiUrl =''

  constructor(private http:HttpClient) { }

  getAllType(): TypePokemon[]{
    return this.tipoLista
  }

  tipoLista:TypePokemon[] = [{
    id:"normal",
    type:"Normale",
    rgb:"#A8A878"
  },{
    id:"fighting",
    type:"Lotta",
    rgb:""
  },{
    id:"flying",
    type:"Volante",
    rgb:""
  },{
    id:"poison",
    type:"Veleno",
    rgb:""
  },{
    id:"ground",
    type:"Terra",
    rgb:""
  },{
    id:"rock",
    type:"Roccia",
    rgb:""
  },{
    id:"bug",
    type:"Coleottero",
    rgb:""
  },{
    id:"ghost",
    type:"Spettro",
    rgb:""
  },{
    id:"steel",
    type:"Acciaio",
    rgb:""
  },{
    id:"fire",
    type:"Fuoco",
    rgb:""
  },{
    id:"water",
    type:"Acqua",
    rgb:""
  },{
    id:"grass",
    type:"Erba",
    rgb:""
  },{
    id:"electric",
    type:"Elettro",
    rgb:""
  },{
    id:"psychic",
    type:"Psico",
    rgb:""
  },{
    id:"ice",
    type:"Ghiaccio",
    rgb:""
  },{
    id:"dragon",
    type:"Drago",
    rgb:""
  },{
    id:"dark",
    type:"Buio",
    rgb:""
  },{
    id:"fairy",
    type:"Folletto",
    rgb:""
  }
]
}
