import { PokemonSerService } from './../pokemon-ser.service';
import { PokemonInt } from './../pokemon-int';
import { Component,inject } from '@angular/core';
import { PokemonComponent } from "../pokemon/pokemon.component";
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
import { HttpClientModule } from '@angular/common/http';

=======
import { TypePokemon } from '../type-pokemon';
import { TipiServiceService } from '../tipi-service.service';
import { TypeComponent } from "../type/type.component";
>>>>>>> Stashed changes
>>>>>>> Stashed changes




@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PokemonComponent, CommonModule, TypeComponent]
})
export class HomeComponent {
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
  
  //dynamicBg:string = 
>>>>>>> Stashed changes

filterType(tipo: string) {
  if(!tipo){
    this.ricercaPokemon = this.pokemonList
    return
  }
  this.ricercaPokemon = this.pokemonList.filter(PokemonInt => PokemonInt?.type[0]===tipo||PokemonInt?.type[1]===tipo)
}

<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
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

  ricercaPokemon: PokemonInt[] = []
}
