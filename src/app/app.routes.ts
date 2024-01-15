import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DetailsComponent } from './details/details.component';


const routeConfig: Routes = [
  {
    path: '',
    component: PokemonComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }
];

export default routeConfig;