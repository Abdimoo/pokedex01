import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PokemonComponent } from './pokemon/pokemon.component';
import { RouterModule } from '@angular/router';
import { PokemonInt } from './pokemon-int';
import { PokemonSerService } from './pokemon-ser.service';



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
    let count!:number
    let i=1
    this.serv.genNumPok().subscribe(num => count = num)
    for(i;i<=1025;i++){
      this.serv.genPokemon(i).subscribe(pokemon=>{
        this.serv.pokemonList.push(pokemon)
      })
    }
    console.log(this.serv.pokemonList);
    
  }
}
