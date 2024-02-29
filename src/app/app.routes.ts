import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';


const routeConfig: Routes = [
  {
    path:'',
    component: LoaderComponent,
    title:'loading...'
  },
  {
    path: 'home',
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