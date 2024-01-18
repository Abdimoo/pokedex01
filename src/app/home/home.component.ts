import { PokemonSerService } from './../pokemon-ser.service';
import { PokemonInt } from './../pokemon-int';
import { Component,NgModule,inject } from '@angular/core';
import { PokemonComponent } from "../pokemon/pokemon.component";
import { CommonModule } from '@angular/common';
import { TypePokemon } from '../type-pokemon';
import { TipiServiceService } from '../tipi-service.service';
import { FormsModule } from '@angular/forms';




@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PokemonComponent, CommonModule,FormsModule]
})


export class HomeComponent {
  ricercaPokemon: PokemonInt[] = []
  moreButton?:boolean
filter: string=""

filterType(tipo: string) {
  this.filter=""
  if(!tipo){
    this.ricercaPokemon = this.pokemonList
    return
  }
  this.ricercaPokemon = this.pokemonList.filter(PokemonInt => PokemonInt?.type.includes(tipo.toLowerCase()))
  this.display=this.ricercaPokemon.slice(0,20)
  this.moreButton=true
  
}

reset(){
  this.pokemonList = this.pokemonSer.getAllPokemon()
    this.ricercaPokemon= this.pokemonList
    this.typeList = this.typeSer.getAllType()
    this.display = this.ricercaPokemon.slice(0,20)
    this.moreButton=true
    this.filter=""
}

filterResults(pokemon: string) {
  if(!pokemon){
    this.ricercaPokemon = this.pokemonList
    this.display=this.ricercaPokemon
    return
  }
  this.ricercaPokemon = this.pokemonList.filter(PokemonInt => PokemonInt?.name.toLowerCase().includes(pokemon.toLowerCase()))
  this.display=this.ricercaPokemon.slice(0,20)
}

  pokemonList: PokemonInt[] = []
  pokemonSer: PokemonSerService = inject(PokemonSerService)
  typeList:TypePokemon[]=[]
  typeSer: TipiServiceService = inject(TipiServiceService)
  display:PokemonInt[] = []

  constructor(){
    this.reset()
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
