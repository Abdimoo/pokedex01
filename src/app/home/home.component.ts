import { PokemonSerService } from './../pokemon-ser.service';
import { PokemonInt } from './../pokemon-int';
import { Component,NgModule,inject } from '@angular/core';
import { PokemonComponent } from "../pokemon/pokemon.component";
import { CommonModule } from '@angular/common';
import { TypePokemon } from '../type-pokemon';
import { TipiServiceService } from '../tipi-service.service';
import { FormsModule } from '@angular/forms';




@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PokemonComponent, CommonModule,FormsModule]
})


export class HomeComponent {
  //var declaration
  ricercaPokemon: PokemonInt[] = []
  moreButton?:boolean
  pokemonList: PokemonInt[] = []
  pokemonSer: PokemonSerService = inject(PokemonSerService)
  typeList:TypePokemon[]=[]
  typeSer: TipiServiceService = inject(TipiServiceService)
  display:PokemonInt[] = []
  typeFilt:string=""
  filter: string=""
  selected: string=""

 //method for filter types 
filterType(tipo: string) {
  this.typeFilt=tipo
  this.filter=""
  this.selected
  if(!tipo){
    this.ricercaPokemon = this.pokemonList
    return
  }
  this.ricercaPokemon = this.pokemonList.filter(PokemonInt => PokemonInt?.type.includes(tipo.toLowerCase()))
  this.display=this.ricercaPokemon.slice(0,20)
  this.moreButton=true
  return
}

//reset when press button reset
reset(){
  this.pokemonList = this.pokemonSer.getAllPokemon()
    this.ricercaPokemon= this.pokemonList
    this.typeList = this.typeSer.getAllType()
    this.display = this.ricercaPokemon.slice(0,20)
    this.moreButton=true
    this.filter=""
    this.typeFilt=""
}

//filter when a pokemon name is written
filterResults(pokemon: string) {
  if(pokemon==""&&this.typeFilt==""){
    this.ricercaPokemon = this.pokemonList
    this.display=this.ricercaPokemon
    return
  }
  if(this.typeFilt==""){
  this.ricercaPokemon = this.pokemonList.filter(
  PokemonInt => PokemonInt?.name.toLowerCase().startsWith(pokemon.toLowerCase()))
  this.display=this.ricercaPokemon.slice(0,20)
    
} else {
    {
      this.ricercaPokemon = this.pokemonList.filter(
      PokemonInt => PokemonInt?.name.toLowerCase().startsWith(pokemon.toLowerCase())&&PokemonInt?.type.includes(this.typeFilt.toLowerCase()))
      this.display=this.ricercaPokemon.slice(0,20)}
  }
  this.moreButton=true
}

  constructor(){
    this.reset()
  }

  //show more button that show 20 more pokemon
  showMore(){
    let newLength = this.display.length + 20;
    if (newLength > this.ricercaPokemon.length) {
        newLength = this.ricercaPokemon.length
        this.moreButton=false
    } else {
      this.moreButton=true
    }
     this.display = this.ricercaPokemon.slice(0, newLength);
  }

  getStyle(tipo:string[]){
    let result = tipo.map(tipo=>{
      return  this.typeList.find(t=>t.id == tipo)
    })
    if(result.length==1){
      return "to bottom,"+ result[0]?.rgb+", #F8F8F8 "//+ result[0]?.rgb
    }
    return "to bottom,"+ result[0]?.rgb+","+ result[1]?.rgb
  }

}
