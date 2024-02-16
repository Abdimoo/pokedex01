import { PokemonSerService } from './../pokemon-ser.service';
import { PokemonInt } from './../pokemon-int';
import { Component, NgModule, OnInit, inject } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { CommonModule } from '@angular/common';
import { TypePokemon } from '../type-pokemon';
import { TipiServiceService } from '../tipi-service.service';
import { FormsModule } from '@angular/forms';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [PokemonComponent, CommonModule, FormsModule],
})
export class HomeComponent{
  //var declaration
  ricercaPokemon: PokemonInt[] = [];
  hideButton: boolean = false;
  pokemonList: PokemonInt[] = [];
  pokemonSer: PokemonSerService = inject(PokemonSerService);
  typeList: TypePokemon[] = [];
  typeSer: TipiServiceService = inject(TipiServiceService);
  display: PokemonInt[] = [];
  typeFilt1: string = '';
  typeFilt2: string = '';
  filter: string = '';
  selected: string = '';
  hideFilter:boolean=true
  height:string=""+0

  //method for filter types
  filterType(tipo: string) {
    if (!tipo) {
      this.ricercaPokemon = this.pokemonList;
      this.hideButton = false;
      return;
    }
    if(this.typeFilt2==tipo){
      this.typeFilt2=''
      this.ricercaPokemon = this.pokemonList.filter((PokemonInt) =>
      PokemonInt?.type.includes(this.typeFilt1.toLowerCase()))
      this.display = this.ricercaPokemon.slice(0, 20);
      this.checkMore()
      return
    }
    if(this.typeFilt1==tipo){
      if(this.typeFilt2==''){
        this.typeFilt1=''
        this.filter=''
        this.ricercaPokemon = this.pokemonList;
        this.display = this.ricercaPokemon.slice(0, 20);
        this.checkMore()
        return;
      }
      this.typeFilt1=this.typeFilt2
      this.typeFilt2='';
      this.ricercaPokemon = this.pokemonList.filter((PokemonInt) =>
      PokemonInt?.type.includes(this.typeFilt1.toLowerCase())
    );
      this.display = this.ricercaPokemon.slice(0, 20);
      this.checkMore()
      return;
    }
    if(this.typeFilt1==""){
      this.typeFilt1 = tipo;
      this.filter = '';
      this.ricercaPokemon = this.pokemonList.filter((PokemonInt) =>
      PokemonInt?.type.includes(this.typeFilt1.toLowerCase())
    );
    } else if(this.typeFilt2==""){
      this.typeFilt2 = tipo;
      this.filter = '';
      this.ricercaPokemon = this.pokemonList.filter((PokemonInt) =>
      PokemonInt?.type.includes(this.typeFilt1.toLowerCase())&&PokemonInt?.type.includes(this.typeFilt2.toLowerCase())
    );
    }
    this.display = this.ricercaPokemon.slice(0, 20);
    this.checkMore()
    return;
  }

  //reset when press button reset
  reset() {
    this.pokemonList = this.pokemonSer.getAllPokemon();
    this.ricercaPokemon = this.pokemonList;
    this.typeList = this.typeSer.getAllType();
    this.display = this.ricercaPokemon.slice(0, 20);
    this.hideButton = false;
    this.filter = '';
    this.typeFilt1 = '';
    this.typeFilt2 = '';
  }

  //filter when a pokemon name is written
  filterResults(pokemon: string) {
    if (pokemon == '' && this.typeFilt1 == '' && this.typeFilt2=='') {
      this.ricercaPokemon = this.pokemonList;
      this.display = this.ricercaPokemon;
      this.checkMore();
      return;
    }
    if (this.typeFilt1 == '') {
      this.ricercaPokemon = this.pokemonList.filter((PokemonInt) =>
        PokemonInt?.name.toLowerCase().startsWith(pokemon.toLowerCase())
      );
      this.display = this.ricercaPokemon.slice(0, 20);
    } else if (this.typeFilt2==''){
      this.ricercaPokemon = this.pokemonList.filter(
        (PokemonInt) =>
          PokemonInt?.name.toLowerCase().startsWith(pokemon.toLowerCase()) &&
          PokemonInt?.type.includes(this.typeFilt1.toLowerCase())
      );
    } else {
      this.ricercaPokemon = this.pokemonList.filter(
        (PokemonInt) =>
          PokemonInt?.name.toLowerCase().startsWith(pokemon.toLowerCase()) &&
          PokemonInt?.type.includes(this.typeFilt1.toLowerCase())&&PokemonInt?.type.includes(this.typeFilt2.toLowerCase())
      );
    }
    this.display = this.ricercaPokemon.slice(0, 20);
    this.checkMore()
  }

  constructor(private httpClient:HttpClient) {
    this.reset();    
  }

  //show more button that show 20 more pokemon
  showMore() {
     let newLength = this.display.length + 20;
    if (newLength > this.ricercaPokemon.length) {
      newLength = this.ricercaPokemon.length;
    }
    this.display = this.ricercaPokemon.slice(0, newLength);
    this.checkMore()
  }

  getStyle(tipo: string[]) {
    let result = tipo.map((tipo) => {
      return this.typeList.find((t) => t.id == tipo);
    });
    if (result.length == 1) {
      return 'to bottom,' + result[0]?.rgb + ', #F8F8F8 '; //+ result[0]?.rgb
    }
    return 'to bottom,' + result[0]?.rgb + ',' + result[1]?.rgb;
  }

  checkMore() {
    if (this.display.length<20) {
      this.hideButton = true;
    } else {
      this.hideButton = false;
    }
  }

  hideFilterMethod() {
    if (this.hideFilter==false) {
      this.hideFilter = true;
      this.height = ""+0;
    } else if(this.hideFilter==true){
      this.hideFilter = false;
      this.height = "auto";
    }
  }
}
