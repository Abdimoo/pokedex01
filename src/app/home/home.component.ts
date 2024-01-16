import { PokemonSerService } from './../pokemon-ser.service';
import { PokemonInt } from './../pokemon-int';
import { Component,inject } from '@angular/core';
import { PokemonComponent } from "../pokemon/pokemon.component";
import { CommonModule } from '@angular/common';




@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PokemonComponent,CommonModule]
})
export class HomeComponent {

filterType(tipo: string) {
  if(!tipo){
    this.ricercaPokemon = this.pokemonList
    return
  }
  this.ricercaPokemon = this.pokemonList.filter(PokemonInt => PokemonInt?.type===tipo)
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

  constructor(){
    this.pokemonList = this.pokemonSer.getAllPokemon()
    this.ricercaPokemon= this.pokemonList
  }

  ricercaPokemon: PokemonInt[] = []
}
