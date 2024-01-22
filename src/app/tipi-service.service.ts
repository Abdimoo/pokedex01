import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypePokemon } from './type-pokemon';

@Injectable({
  providedIn: 'root'
})

export class TipiServiceService {

  constructor() { }

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
    rgb:"#C03028"
  },{
    id:"flying",
    type:"Volante",
    rgb:"#A890F0"
  },{
    id:"poison",
    type:"Veleno",
    rgb:"#A040A0"
  },{
    id:"ground",
    type:"Terra",
    rgb:"#E0C068"
  },{
    id:"rock",
    type:"Roccia",
    rgb:"#B8A038"
  },{
    id:"bug",
    type:"Coleottero",
    rgb:"#A8B820"
  },{
    id:"ghost",
    type:"Spettro",
    rgb:"#705898"
  },{
    id:"steel",
    type:"Acciaio",
    rgb:"#B8B8D0"
  },{
    id:"fire",
    type:"Fuoco",
    rgb:"#F08030"
  },{
    id:"water",
    type:"Acqua",
    rgb:"#6890F0"
  },{
    id:"grass",
    type:"Erba",
    rgb:"#78C850"
  },{
    id:"electric",
    type:"Elettro",
    rgb:"#F8D030"
  },{
    id:"psychic",
    type:"Psico",
    rgb:"#F85888"
  },{
    id:"ice",
    type:"Ghiaccio",
    rgb:"#98D8D8"
  },{
    id:"dragon",
    type:"Drago",
    rgb:"#7038F8"
  },{
    id:"dark",
    type:"Buio",
    rgb:"#705848"
  },{
    id:"fairy",
    type:"Folletto",
    rgb:"#EE99AC"
  }
]
}
