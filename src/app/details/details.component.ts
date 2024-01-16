import { PokemonInt } from './../pokemon-int';
import { PokemonSerService } from './../pokemon-ser.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivationEnd } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  pokemonService: PokemonSerService = inject(PokemonSerService)
  pokemon: PokemonInt|undefined
  constructor(){
    const pokemonID = Number(this.route.snapshot.params['id'])
    this.pokemon = this.pokemonService.getPokemonById(pokemonID);
  }
}
