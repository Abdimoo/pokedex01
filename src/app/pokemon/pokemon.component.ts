import { TypePokemon } from './../type-pokemon';
import { TipiServiceService } from './../tipi-service.service';
import { CommonModule } from '@angular/common';
import { PokemonInt } from './../pokemon-int';
import { Component,Input, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import routeConfig from '../app.routes';
import { map } from 'rxjs';


@Component({
  selector: 'app-pokemon',
  standalone: true,

  imports: [CommonModule,RouterModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input() pokemonInt!: PokemonInt;
  tipo:(TypePokemon|undefined)[]=[]
  typeList:TypePokemon[] = []

  constructor(private typeSer:TipiServiceService){
    this.typeList = this.typeSer.getAllType()
  }

  ngOnInit(){
    let result = this.pokemonInt.type.map(tipo=>{
      return  this.typeList.find(t=>t.id == tipo)
    })
    this.tipo =result
  }

}
