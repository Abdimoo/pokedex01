import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PokemonComponent } from './pokemon/pokemon.component';
import { RouterModule } from '@angular/router';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent,PokemonComponent,RouterModule]
})
export class AppComponent {
  title = 'pokedex';
}
