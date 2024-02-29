import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RouterModule } from '@angular/router';
import { PokemonInt } from './pokemon-int';
import { PokemonSerService } from './pokemon-ser.service';
import { LoaderComponent } from './loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    PokemonComponent,
    RouterModule,
    LoaderComponent
  ],
})
export class AppComponent implements AfterViewInit{
  @ViewChild(LoaderComponent) loader?: LoaderComponent;
  
  title = 'pokedex';
  serv: PokemonSerService = inject(PokemonSerService);
  list: PokemonInt[] = [];
  ngAfterViewInit(): void {
    alert("on init")
    this.loader?.showLoader(true)
    console.log(this.loader?.isLoading);
    
    let i = 1;
    var count!: number;
    this.serv.genNumPok().subscribe((num) => {
      count = num;
      for (i; i <= count; i++) {
        this.serv.genPokemon(i).subscribe((pokemon) => {
          this.serv.pokemonList.push(pokemon);
          setTimeout('',15)
        });
      }
      this.serv.pokemonSort(this.serv.pokemonList)
    });
  }
}
