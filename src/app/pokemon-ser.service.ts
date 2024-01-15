import { Injectable } from '@angular/core';
import { PokemonInt } from './pokemon-int';

@Injectable({
  providedIn: 'root'
})
export class PokemonSerService {

  constructor() { }

  pokemonList: PokemonInt[]=[
    {
    id:1,
    name: "Bulbasaur",
    //lvl:100,
    type:"erba",
    foto:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },{
    id:2,
    name: "Ivysaur",
    //lvl:100,
    type:"erba",
    foto:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },{
    id:3,
    name: "Venosaur",
    //lvl:100,
    type:"erba",
    foto:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },{
    id:4,
    name: "Charmander",
    //lvl:100,
    type:"fuoco",
    foto:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },{
    id:5,
    name: "Charmeleon",
    //lvl:100,
    type:"fuoco",
    foto:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },{
    id:6,
    name: "Charizard",
    //lvl:100,
    type:"fuoco",
    foto:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },{
    id:7,
    name: "Squirtle",
    //lvl:100,
    type:"acqua",
    foto:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },{
    id:8,
    name: "Wartortle",
    //lvl:100,
    type:"acqua",
    foto:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },{
    id:9,
    name: "Blastoise",
    //lvl:100
    type:"acqua",
    foto:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  }
]

getAllPokemon(): PokemonInt[]{
  return this.pokemonList
}

getPokemonById(id: number): PokemonInt | undefined{
  return this.pokemonList.find(pokemonInt => pokemonInt.id === id)
}
}
