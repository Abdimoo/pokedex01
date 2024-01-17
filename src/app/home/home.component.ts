import { PokemonSerService } from './../pokemon-ser.service';
import { PokemonInt } from './../pokemon-int';
import { Component,inject } from '@angular/core';
import { PokemonComponent } from "../pokemon/pokemon.component";
import { CommonModule } from '@angular/common';
import { TypePokemon } from '../type-pokemon';
import { TipiServiceService } from '../tipi-service.service';




@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PokemonComponent, CommonModule]
})
export class HomeComponent {
  ricercaPokemon: PokemonInt[] = []

filterType(tipo: string) {
  if(!tipo){
    this.ricercaPokemon = this.pokemonList
    return
  }
  this.ricercaPokemon = this.pokemonList.filter(PokemonInt => PokemonInt?.type.includes(tipo.toLowerCase()))
  console.log(tipo)
}

filterResults(pokemon: string) {
  if(!pokemon){
    this.ricercaPokemon = this.pokemonList
    return
  }
  this.ricercaPokemon = this.pokemonList.filter(PokemonInt => PokemonInt?.name.toLowerCase().includes(pokemon.toLowerCase()))
}
  pokemonList: PokemonInt[] = []
  pokemonSer: PokemonSerService = inject(PokemonSerService)
  typeList:TypePokemon[]=[]
  typeSer: TipiServiceService = inject(TipiServiceService)

  constructor(){
    this.pokemonList = this.pokemonSer.getAllPokemon()
    this.ricercaPokemon= this.pokemonList
    this.typeList = this.typeSer.getAllType()
  }

  
}
