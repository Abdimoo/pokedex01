import { CommonModule } from '@angular/common';
import { PokemonInt } from './../pokemon-int';
import { Component,Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import routeConfig from '../app.routes';


@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input() pokemonInt!: PokemonInt;

}
