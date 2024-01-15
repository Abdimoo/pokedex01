import { CommonModule } from '@angular/common';
import { PokemonInt } from './../pokemon-int';
import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input() pokemonInt!: PokemonInt;
}
