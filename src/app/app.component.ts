import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PokemonComponent } from './pokemon/pokemon.component';
import { RouterModule } from '@angular/router';
import { PokemonInt } from './pokemon-int';
import { PokemonSerService } from './pokemon-ser.service';
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent,PokemonComponent,RouterModule]
})
export class AppComponent {
  title = 'pokedex';
  serv:PokemonSerService=inject(PokemonSerService);
  list:PokemonInt[]=[]
  ngOnInit(): void {
    let http!:HttpClient
    this.serv.genPokemon().subscribe((dato) => this.serv.pokemonList=dato)
    console.log(this.serv.pokemonList);
    
  }
}
