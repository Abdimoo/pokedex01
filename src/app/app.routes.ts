import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';


const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Pokèdex'
  },
  {
    path: 'pokemon/:id',
    component: DetailsComponent,
    title: 'Pokemon details'
  }
];

export default routeConfig;