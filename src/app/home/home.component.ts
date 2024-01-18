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
  moreButton?:boolean
filterType(tipo: string) {
  if(!tipo){
    this.ricercaPokemon = this.pokemonList
    return
  }
  this.ricercaPokemon = this.pokemonList.filter(PokemonInt => PokemonInt?.type.includes(tipo.toLowerCase()))
  if(this.ricercaPokemon.length<20){
    this.moreButton=true
  } else {
    this.moreButton=false
  }
  //this.reset()
}

reset(){
  this.display = this.ricercaPokemon.slice(0,20)
}

filterResults(pokemon: string) {
  if(!pokemon){
    this.ricercaPokemon = this.pokemonList
    return
  }
  console.log(pokemon)
  this.ricercaPokemon = this.pokemonList.filter(PokemonInt => PokemonInt?.name.toLowerCase().includes(pokemon.toLowerCase()))
  this.reset()
}

  pokemonList: PokemonInt[] = []
  pokemonSer: PokemonSerService = inject(PokemonSerService)
  typeList:TypePokemon[]=[]
  typeSer: TipiServiceService = inject(TipiServiceService)
  display:PokemonInt[] = []

  constructor(){
    this.pokemonList = this.pokemonSer.getAllPokemon()
    this.ricercaPokemon= this.pokemonList
    this.typeList = this.typeSer.getAllType()
    this.display = this.ricercaPokemon.slice(0,20)
    this.moreButton=true
  }

  showMore(){
    let newLength = this.display.length + 20;
    if (newLength > this.ricercaPokemon.length) {
        newLength = this.ricercaPokemon.length
        this.moreButton=false
    } else {
      this.moreButton=true
    }
     this.display = this.ricercaPokemon.slice(0, newLength);
  }
}
