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
  pokemonList: PokemonInt[] = []
  pokemonSer: PokemonSerService = inject(PokemonSerService)

  constructor(){
    this.pokemonList = this.pokemonSer.getAllPokemon()
  }
}
