import { Injectable } from '@angular/core';
import { PokemonInt } from './pokemon-int';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonSerService {
  created: boolean=false;

  constructor(private httpClient:HttpClient) { }

  pokemonList:PokemonInt[] = []

  /*pokemonList: PokemonInt[]=[
    { "id": 1, "name": "Bulbasaur", "type": ["grass","poison"] },

    { "id": 2, "name": "Ivysaur", "type": ["grass","poison"] },
    
    { "id": 3, "name": "Venusaur", "type": ["grass","poison"] },
    
    { "id": 4, "name": "Charmander", "type": ["fire"] },
    
    { "id": 5, "name": "Charmeleon", "type": ["fire"] },
    
    { "id": 6, "name": "Charizard", "type": ["fire","flying"] },
    
    { "id": 7, "name": "Squirtle", "type": ["water"] },
    
    { "id": 8, "name": "Wartortle", "type": ["water"] },
    
    { "id": 9, "name": "Blastoise", "type": ["water"] },
    
    { "id": 10, "name": "Caterpie", "type": ["bug"] },
    
    { "id": 11, "name": "Metapod", "type": ["bug"] },
    
    { "id": 12, "name": "Butterfree", "type": ["bug","flying"] },
    
    { "id": 13, "name": "Weedle", "type": ["bug","poison"] },
    
    { "id": 14, "name": "Kakuna", "type": ["bug","poison"] },
    
    { "id": 15, "name": "Beedrill", "type": ["bug","poison"] },
    
    { "id": 16, "name": "Pidgey", "type": ["normal","flying"] },
    
    { "id": 17, "name": "Pidgeotto", "type": ["normal","flying"] },
    
    { "id": 18, "name": "Pidgeot", "type": ["normal","flying"] },
    
    { "id": 19, "name": "Rattata", "type": ["normal"] },
    
    { "id": 20, "name": "Raticate", "type": ["normal"] },
    
    { "id": 21, "name": "Spearow", "type": ["normal","flying"] },
    
    { "id": 22, "name": "Fearow", "type": ["normal","flying"] },
    
    { "id": 23, "name": "Ekans", "type": ["poison"] },
    
    { "id": 24, "name": "Arbok", "type": ["poison"] },
    
    { "id": 25, "name": "Pikachu", "type": ["electric"] },
    
    { "id": 26, "name": "Raichu", "type": ["electric"] },
    
    { "id": 27, "name": "Sandshrew", "type": ["ground"] },
    
    { "id": 28, "name": "Sandslash", "type": ["ground"] },
    
    { "id": 29, "name": "Nidoran♀", "type": ["poison"] },
    
    { "id": 30, "name": "Nidorina", "type": ["poison"] },
    
    { "id": 31, "name": "Nidoqueen", "type": ["poison","ground"] },
    
    { "id": 32, "name": "Nidoran♂", "type": ["poison"] },
    
    { "id": 33, "name": "Nidorino", "type": ["poison"] },
    
    { "id": 34, "name": "Nidoking", "type": ["poison","ground"] },
    
    { "id": 35, "name": "Clefairy", "type": ["fairy"] },
    
    { "id": 36, "name": "Clefable", "type": ["fairy"] },
    
    { "id": 37, "name": "Vulpix", "type": ["fire"] },
    
    { "id": 38, "name": "Ninetales", "type": ["fire"] },
    
    { "id": 39, "name": "Jigglypuff", "type": ["normal","fairy"] },
    
    { "id": 40, "name": "Wigglytuff", "type": ["normal","fairy"] },
    
    { "id": 41, "name": "Zubat", "type": ["poison","flying"] },
    
    { "id": 42, "name": "Golbat", "type": ["poison","flying"] },
    
    { "id": 43, "name": "Oddish", "type": ["grass","poison"] },
    
    { "id": 44, "name": "Gloom", "type": ["grass","poison"] },
    
    { "id": 45, "name": "Vileplume", "type": ["grass","poison"] },
    
    { "id": 46, "name": "Paras", "type": ["bug","grass"] },
    
    { "id": 47, "name": "Parasect", "type": ["bug","grass"] },
    
    { "id": 48, "name": "Venonat", "type": ["bug","poison"] },
    
    { "id": 49, "name": "Venomoth", "type": ["bug","poison"] },
    
    { "id": 50, "name": "Diglett", "type": ["ground"] },
    
    { "id": 51, "name": "Dugtrio", "type": ["ground"] },
    
    { "id": 52, "name": "Meowth", "type": ["normal"] },
    
    { "id": 53, "name": "Persian", "type": ["normal"] },
    
    { "id": 54, "name": "Psyduck", "type": ["water"] },
    
    { "id": 55, "name": "Golduck", "type": ["water"] },
    
    { "id": 56, "name": "Mankey", "type": ["fighting"] },
    
    { "id": 57, "name": "Primeape", "type": ["fighting"] },
    
    { "id": 58, "name": "Growlithe", "type": ["fire"] },
    
    { "id": 59, "name": "Arcanine", "type": ["fire"] },
    
    { "id": 60, "name": "Poliwag", "type": ["water"] },
    
    { "id": 61, "name": "Poliwhirl", "type": ["water"] },
    
    { "id": 62, "name": "Poliwrath", "type": ["water","fighting"] },
    
    { "id": 63, "name": "Abra", "type": ["psychic"] },
    
    { "id": 64, "name": "Kadabra", "type": ["psychic"] },
    
    { "id": 65, "name": "Alakazam", "type": ["psychic"] },
    
    { "id": 66, "name": "Machop", "type": ["fighting"] },
    
    { "id": 67, "name": "Machoke", "type": ["fighting"] },
    
    { "id": 68, "name": "Machamp", "type": ["fighting"] },
    
    { "id": 69, "name": "Bellsprout", "type": ["grass","poison"] },
    
    { "id": 70, "name": "Weepinbell", "type": ["grass","poison"] },
    
    { "id": 71, "name": "Victreebel", "type": ["grass","poison"] },
    
    { "id": 72, "name": "Tentacool", "type": ["water","poison"] },
    
    { "id": 73, "name": "Tentacruel", "type": ["water","poison"] },
    
    { "id": 74, "name": "Geodude", "type": ["rock","ground"] },
    
    { "id": 75, "name": "Graveler", "type": ["rock","ground"] },
    
    { "id": 76, "name": "Golem", "type": ["rock","ground"] },
    
    { "id": 77, "name": "Ponyta", "type": ["fire"] },
    
    { "id": 78, "name": "Rapidash", "type": ["fire"] },
    
    { "id": 79, "name": "Slowpoke", "type": ["water","psychic"] },
    
    { "id": 80, "name": "Slowbro", "type": ["water","psychic"] },
    
    { "id": 81, "name": "Magnemite", "type": ["electric","steel"] },
    
    { "id": 82, "name": "Magneton", "type": ["electric","steel"] },
    
    { "id": 83, "name": "Farfetch'd", "type": ["normal","flying"] },
    
    { "id": 84, "name": "Doduo", "type": ["normal","flying"] },
    
    { "id": 85, "name": "Dodrio", "type": ["normal","flying"] },
    
    { "id": 86, "name": "Seel", "type": ["water"] },
    
    { "id": 87, "name": "Dewgong", "type": ["water","ice"] },
    
    { "id": 88, "name": "Grimer", "type": ["poison"] },
    
    { "id": 89, "name": "Muk", "type": ["poison"] },
    
    { "id": 90, "name": "Shellder", "type": ["water"] },
    
    { "id": 91, "name": "Cloyster", "type": ["water","ice"] },
    
    { "id": 92, "name": "Gastly", "type": ["ghost","poison"] },
    
    { "id": 93, "name": "Haunter", "type": ["ghost","poison"] },
    
    { "id": 94, "name": "Gengar", "type": ["ghost","poison"] },
    
    { "id": 95, "name": "Onix", "type": ["rock","ground"] },
    
    { "id": 96, "name": "Drowzee", "type": ["psychic"] },
    
    { "id": 97, "name": "Hypno", "type": ["psychic"] },
    
    { "id": 98, "name": "Krabby", "type": ["water"] },
    
    { "id": 99, "name": "Kingler", "type": ["water"] },
    
    { "id": 100, "name": "Voltorb", "type": ["electric"] },
    
    { "id": 101, "name": "Electrode", "type": ["electric"] },
    
    { "id": 102, "name": "Exeggcute", "type": ["grass","psychic"] },
    
    { "id": 103, "name": "Exeggutor", "type": ["grass","psychic"] },
    
    { "id": 104, "name": "Cubone", "type": ["ground"] },
    
    { "id": 105, "name": "Marowak", "type": ["ground"] },
    
    { "id": 106, "name": "Hitmonlee", "type": ["fighting"] },
    
    { "id": 107, "name": "Hitmonchan", "type": ["fighting"] },
    
    { "id": 108, "name": "Lickitung", "type": ["normal"] },
    
    { "id": 109, "name": "Koffing", "type": ["poison"] },
    
    { "id": 110, "name": "Weezing", "type": ["poison"] },
    
    { "id": 111, "name": "Rhyhorn", "type": ["ground","rock"] },
    
    { "id": 112, "name": "Rhydon", "type": ["ground","rock"] },
    
    { "id": 113, "name": "Chansey", "type": ["normal"] },
    
    { "id": 114, "name": "Tangela", "type": ["grass"] },
    
    { "id": 115, "name": "Kangaskhan", "type": ["normal"] },
    
    { "id": 116, "name": "Horsea", "type": ["water"] },
    
    { "id": 117, "name": "Seadra", "type": ["water"] },
    
    { "id": 118, "name": "Goldeen", "type": ["water"] },
    
    { "id": 119, "name": "Seaking", "type": ["water"] },
    
    { "id": 120, "name": "Staryu", "type": ["water"] },
    
    { "id": 121, "name": "Starmie", "type": ["water","psychic"] },
    
    { "id": 122, "name": "Mr. Mime", "type": ["psychic","fairy"] },
    
    { "id": 123, "name": "Scyther", "type": ["bug","flying"] },
    
    { "id": 124, "name": "Jynx", "type": ["ice","psychic"] },
    
    { "id": 125, "name": "Electabuzz", "type": ["electric"] },
    
    { "id": 126, "name": "Magmar", "type": ["fire"] },
    
    { "id": 127, "name": "Pinsir", "type": ["bug"] },
    
    { "id": 128, "name": "Tauros", "type": ["normal"] },
    
    { "id": 129, "name": "Magikarp", "type": ["water"] },
    
    { "id": 130, "name": "Gyarados", "type": ["water","flying"] },
    
    { "id": 131, "name": "Lapras", "type": ["water","ice"] },
    
    { "id": 132, "name": "Ditto", "type": ["normal"] },
    
    { "id": 133, "name": "Eevee", "type": ["normal"] },
    
    { "id": 134, "name": "Vaporeon", "type": ["water"] },
    
    { "id": 135, "name": "Jolteon", "type": ["electric"] },
    
    { "id": 136, "name": "Flareon", "type": ["fire"] },
    
    { "id": 137, "name": "Porygon", "type": ["normal"] },
    
    { "id": 138, "name": "Omanyte", "type": ["rock","water"] },
    
    { "id": 139, "name": "Omastar", "type": ["rock","water"] },
    
    { "id": 140, "name": "Kabuto", "type": ["rock","water"] },
    
    { "id": 141, "name": "Kabutops", "type": ["rock","water"] },
    
    { "id": 142, "name": "Aerodactyl", "type": ["rock","flying"] },
    
    { "id": 143, "name": "Snorlax", "type": ["normal"] },
    
    { "id": 144, "name": "Articuno", "type": ["ice","flying"] },
    
    { "id": 145, "name": "Zapdos", "type": ["electric","flying"] },
    
    { "id": 146, "name": "Moltres", "type": ["fire","flying"] },
    
    { "id": 147, "name": "Dratini", "type": ["dragon"] },
    
    { "id": 148, "name": "Dragonair", "type": ["dragon"] },
    
    { "id": 149, "name": "Dragonite", "type": ["dragon","flying"] },
    
    { "id": 150, "name": "Mewtwo", "type": ["psychic"] },
    
    { "id": 151, "name": "Mew", "type": ["psychic"] },
    
    { "id": 152, "name": "Chikorita", "type": ["grass"] },
    
    { "id": 153, "name": "Bayleef", "type": ["grass"] },
    
    { "id": 154, "name": "Meganium", "type": ["grass"] },
    
    { "id": 155, "name": "Cyndaquil", "type": ["fire"] },
    
    { "id": 156, "name": "Quilava", "type": ["fire"] },
    
    { "id": 157, "name": "Typhlosion", "type": ["fire"] },
    
    { "id": 158, "name": "Totodile", "type": ["water"] },
    
    { "id": 159, "name": "Croconaw", "type": ["water"] },
    
    { "id": 160, "name": "Feraligatr", "type": ["water"] },
    
    { "id": 161, "name": "Sentret", "type": ["normal"] },
    
    { "id": 162, "name": "Furret", "type": ["normal"] },
    
    { "id": 163, "name": "Hoothoot", "type": ["normal","flying"] },
    
    { "id": 164, "name": "Noctowl", "type": ["normal","flying"] },
    
    { "id": 165, "name": "Ledyba", "type": ["bug","flying"] },
    
    { "id": 166, "name": "Ledian", "type": ["bug","flying"] },
    
    { "id": 167, "name": "Spinarak", "type": ["bug","poison"] },
    
    { "id": 168, "name": "Ariados", "type": ["bug","poison"] },
    
    { "id": 169, "name": "Crobat", "type": ["poison","flying"] },
    
    { "id": 170, "name": "Chinchou", "type": ["water","electric"] },
    
    { "id": 171, "name": "Lanturn", "type": ["water","electric"] },
    
    { "id": 172, "name": "Pichu", "type": ["electric"] },
    
    { "id": 173, "name": "Cleffa", "type": ["fairy"] },
    
    { "id": 174, "name": "Igglybuff", "type": ["normal","fairy"] },
    
    { "id": 175, "name": "Togepi", "type": ["fairy"] },
    
    { "id": 176, "name": "Togetic", "type": ["fairy","flying"] },
    
    { "id": 177, "name": "Natu", "type": ["psychic","flying"] },
    
    { "id": 178, "name": "Xatu", "type": ["psychic","flying"] },
    
    { "id": 179, "name": "Mareep", "type": ["electric"] },
    
    { "id": 180, "name": "Flaaffy", "type": ["electric"] },
    
    { "id": 181, "name": "Ampharos", "type": ["electric"] },
    
    { "id": 182, "name": "Bellossom", "type": ["grass"] },
    
    { "id": 183, "name": "Marill", "type": ["water","fairy"] },
    
    { "id": 184, "name": "Azumarill", "type": ["water","fairy"] },
    
    { "id": 185, "name": "Sudowoodo", "type": ["rock"] },
    
    { "id": 186, "name": "Politoed", "type": ["water"] },
    
    { "id": 187, "name": "Hoppip", "type": ["grass","flying"] },
    
    { "id": 188, "name": "Skiploom", "type": ["grass","flying"] },
    
    { "id": 189, "name": "Jumpluff", "type": ["grass","flying"] },
    
    { "id": 190, "name": "Aipom", "type": ["normal"] },
    
    { "id": 191, "name": "Sunkern", "type": ["grass"] },
    
    { "id": 192, "name": "Sunflora", "type": ["grass"] },
    
    { "id": 193, "name": "Yanma", "type": ["bug","flying"] },
    
    { "id": 194, "name": "Wooper", "type": ["water","ground"] },
    
    { "id": 195, "name": "Quagsire", "type": ["water","ground"] },
    
    { "id": 196, "name": "Espeon", "type": ["psychic"] },
    
    { "id": 197, "name": "Umbreon", "type": ["dark"] },
    
    { "id": 198, "name": "Murkrow", "type": ["dark","flying"] },
    
    { "id": 199, "name": "Slowking", "type": ["water","psychic"] },
    
    { "id": 200, "name": "Misdreavus", "type": ["ghost"] },
    
    { "id": 201, "name": "Unown", "type": ["psychic"] },
    
    { "id": 202, "name": "Wobbuffet", "type": ["psychic"] },
    
    { "id": 203, "name": "Girafarig", "type": ["normal","psychic"] },
    
    { "id": 204, "name": "Pineco", "type": ["bug"] },
    
    { "id": 205, "name": "Forretress", "type": ["bug","steel"] },
    
    { "id": 206, "name": "Dunsparce", "type": ["normal"] },
    
    { "id": 207, "name": "Gligar", "type": ["ground","flying"] },
    
    { "id": 208, "name": "Steelix", "type": ["steel","ground"] },
    
    { "id": 209, "name": "Snubbull", "type": ["fairy"] },
    
    { "id": 210, "name": "Granbull", "type": ["fairy"] },
    
    { "id": 211, "name": "Qwilfish", "type": ["water","poison"] },
    
    { "id": 212, "name": "Scizor", "type": ["bug","steel"] },
    
    { "id": 213, "name": "Shuckle", "type": ["bug","rock"] },
    
    { "id": 214, "name": "Heracross", "type": ["bug","fighting"] },
    
    { "id": 215, "name": "Sneasel", "type": ["dark","ice"] },
    
    { "id": 216, "name": "Teddiursa", "type": ["normal"] },
    
    { "id": 217, "name": "Ursaring", "type": ["normal"] },
    
    { "id": 218, "name": "Slugma", "type": ["fire"] },
    
    { "id": 219, "name": "Magcargo", "type": ["fire","rock"] },
    
    { "id": 220, "name": "Swinub", "type": ["ice","ground"] },
    
    { "id": 221, "name": "Piloswine", "type": ["ice","ground"] },
    
    { "id": 222, "name": "Corsola", "type": ["water","rock"] },
    
    { "id": 223, "name": "Remoraid", "type": ["water"] },
    
    { "id": 224, "name": "Octillery", "type": ["water"] },
    
    { "id": 225, "name": "Delibird", "type": ["ice","flying"] },
    
    { "id": 226, "name": "Mantine", "type": ["water","flying"] },
    
    { "id": 227, "name": "Skarmory", "type": ["steel","flying"] },
    
    { "id": 228, "name": "Houndour", "type": ["dark","fire"] },
    
    { "id": 229, "name": "Houndoom", "type": ["dark","fire"] },
    
    { "id": 230, "name": "Kingdra", "type": ["water","dragon"] },
    
    { "id": 231, "name": "Phanpy", "type": ["ground"] },
    
    { "id": 232, "name": "Donphan", "type": ["ground"] },
    
    { "id": 233, "name": "Porygon2", "type": ["normal"] },
    
    { "id": 234, "name": "Stantler", "type": ["normal"] },
    
    { "id": 235, "name": "Smeargle", "type": ["normal"] },
    
    { "id": 236, "name": "Tyrogue", "type": ["fighting"] },
    
    { "id": 237, "name": "Hitmontop", "type": ["fighting"] },
    
    { "id": 238, "name": "Smoochum", "type": ["ice","psychic"] },
    
    { "id": 239, "name": "Elekid", "type": ["electric"] },
    
    { "id": 240, "name": "Magby", "type": ["fire"] },
    
    { "id": 241, "name": "Miltank", "type": ["normal"] },
    
    { "id": 242, "name": "Blissey", "type": ["normal"] },
    
    { "id": 243, "name": "Raikou", "type": ["electric"] },
    
    { "id": 244, "name": "Entei", "type": ["fire"] },
    
    { "id": 245, "name": "Suicune", "type": ["water"] },
    
    { "id": 246, "name": "Larvitar", "type": ["rock","ground"] },
    
    { "id": 247, "name": "Pupitar", "type": ["rock","ground"] },
    
    { "id": 248, "name": "Tyranitar", "type": ["rock","dark"] },
    
    { "id": 249, "name": "Lugia", "type": ["psychic","flying"] },
    
    { "id": 250, "name": "Ho-oh", "type": ["fire","flying"] },
    
    { "id": 251, "name": "Celebi", "type": ["psychic","grass"] },
    
    { "id": 252, "name": "Treecko", "type": ["grass"] },
    
    { "id": 253, "name": "Grovyle", "type": ["grass"] },
    
    { "id": 254, "name": "Sceptile", "type": ["grass"] },
    
    { "id": 255, "name": "Torchic", "type": ["fire"] },
    
    { "id": 256, "name": "Combusken", "type": ["fire","fighting"] },
    
    { "id": 257, "name": "Blaziken", "type": ["fire","fighting"] },
    
    { "id": 258, "name": "Mudkip", "type": ["water"] },
    
    { "id": 259, "name": "Marshtomp", "type": ["water","ground"] },
    
    { "id": 260, "name": "Swampert", "type": ["water","ground"] },
    
    { "id": 261, "name": "Poochyena", "type": ["dark"] },
    
    { "id": 262, "name": "Mightyena", "type": ["dark"] },
    
    { "id": 263, "name": "Zigzagoon", "type": ["normal"] },
    
    { "id": 264, "name": "Linoone", "type": ["normal"] },
    
    { "id": 265, "name": "Wurmple", "type": ["bug"] },
    
    { "id": 266, "name": "Silcoon", "type": ["bug"] },
    
    { "id": 267, "name": "Beautifly", "type": ["bug","flying"] },
    
    { "id": 268, "name": "Cascoon", "type": ["bug"] },
    
    { "id": 269, "name": "Dustox", "type": ["bug","poison"] },
    
    { "id": 270, "name": "Lotad", "type": ["water","grass"] },
    
    { "id": 271, "name": "Lombre", "type": ["water","grass"] },
    
    { "id": 272, "name": "Ludicolo", "type": ["water","grass"] },
    
    { "id": 273, "name": "Seedot", "type": ["grass"] },
    
    { "id": 274, "name": "Nuzleaf", "type": ["grass","dark"] },
    
    { "id": 275, "name": "Shiftry", "type": ["grass","dark"] },
    
    { "id": 276, "name": "Taillow", "type": ["normal","flying"] },
    
    { "id": 277, "name": "Swellow", "type": ["normal","flying"] },
    
    { "id": 278, "name": "Wingull", "type": ["water","flying"] },
    
    { "id": 279, "name": "Pelipper", "type": ["water","flying"] },
    
    { "id": 280, "name": "Ralts", "type": ["psychic","fairy"] },
    
    { "id": 281, "name": "Kirlia", "type": ["psychic","fairy"] },
    
    { "id": 282, "name": "Gardevoir", "type": ["psychic","fairy"] },
    
    { "id": 283, "name": "Surskit", "type": ["bug","water"] },
    
    { "id": 284, "name": "Masquerain", "type": ["bug","flying"] },
    
    { "id": 285, "name": "Shroomish", "type": ["grass"] },
    
    { "id": 286, "name": "Breloom", "type": ["grass","fighting"] },
    
    { "id": 287, "name": "Slakoth", "type": ["normal"] },
    
    { "id": 288, "name": "Vigoroth", "type": ["normal"] },
    
    { "id": 289, "name": "Slaking", "type": ["normal"] },
    
    { "id": 290, "name": "Nincada", "type": ["bug","ground"] },
    
    { "id": 291, "name": "Ninjask", "type": ["bug","flying"] },
    
    { "id": 292, "name": "Shedinja", "type": ["bug","ghost"] },
    
    { "id": 293, "name": "Whismur", "type": ["normal"] },
    
    { "id": 294, "name": "Loudred", "type": ["normal"] },
    
    { "id": 295, "name": "Exploud", "type": ["normal"] },
    
    { "id": 296, "name": "Makuhita", "type": ["fighting"] },
    
    { "id": 297, "name": "Hariyama", "type": ["fighting"] },
    
    { "id": 298, "name": "Azurill", "type": ["normal","fairy"] },
    
    { "id": 299, "name": "Nosepass", "type": ["rock"] },
    
    { "id": 300, "name": "Skitty", "type": ["normal"] },
    
    { "id": 301, "name": "Delcatty", "type": ["normal"] },
    
    { "id": 302, "name": "Sableye", "type": ["dark","ghost"] },
    
    { "id": 303, "name": "Mawile", "type": ["steel","fairy"] },
    
    { "id": 304, "name": "Aron", "type": ["steel","rock"] },
    
    { "id": 305, "name": "Lairon", "type": ["steel","rock"] },
    
    { "id": 306, "name": "Aggron", "type": ["steel","rock"] },
    
    { "id": 307, "name": "Meditite", "type": ["fighting","psychic"] },
    
    { "id": 308, "name": "Medicham", "type": ["fighting","psychic"] },
    
    { "id": 309, "name": "Electrike", "type": ["electric"] },
    
    { "id": 310, "name": "Manectric", "type": ["electric"] },
    
    { "id": 311, "name": "Plusle", "type": ["electric"] },
    
    { "id": 312, "name": "Minun", "type": ["electric"] },
    
    { "id": 313, "name": "Volbeat", "type": ["bug"] },
    
    { "id": 314, "name": "Illumise", "type": ["bug"] },
    
    { "id": 315, "name": "Roselia", "type": ["grass","poison"] },
    
    { "id": 316, "name": "Gulpin", "type": ["poison"] },
    
    { "id": 317, "name": "Swalot", "type": ["poison"] },
    
    { "id": 318, "name": "Carvanha", "type": ["water","dark"] },
    
    { "id": 319, "name": "Sharpedo", "type": ["water","dark"] },
    
    { "id": 320, "name": "Wailmer", "type": ["water"] },
    
    { "id": 321, "name": "Wailord", "type": ["water"] },
    
    { "id": 322, "name": "Numel", "type": ["fire","ground"] },
    
    { "id": 323, "name": "Camerupt", "type": ["fire","ground"] },
    
    { "id": 324, "name": "Torkoal", "type": ["fire"] },
    
    { "id": 325, "name": "Spoink", "type": ["psychic"] },
    
    { "id": 326, "name": "Grumpig", "type": ["psychic"] },
    
    { "id": 327, "name": "Spinda", "type": ["normal"] },
    
    { "id": 328, "name": "Trapinch", "type": ["ground"] },
    
    { "id": 329, "name": "Vibrava", "type": ["ground","dragon"] },
    
    { "id": 330, "name": "Flygon", "type": ["ground","dragon"] },
    
    { "id": 331, "name": "Cacnea", "type": ["grass"] },
    
    { "id": 332, "name": "Cacturne", "type": ["grass","dark"] },
    
    { "id": 333, "name": "Swablu", "type": ["normal","flying"] },
    
    { "id": 334, "name": "Altaria", "type": ["dragon","flying"] },
    
    { "id": 335, "name": "Zangoose", "type": ["normal"] },
    
    { "id": 336, "name": "Seviper", "type": ["poison"] },
    
    { "id": 337, "name": "Lunatone", "type": ["rock","psychic"] },
    
    { "id": 338, "name": "Solrock", "type": ["rock","psychic"] },
    
    { "id": 339, "name": "Barboach", "type": ["water","ground"] },
    
    { "id": 340, "name": "Whiscash", "type": ["water","ground"] },
    
    { "id": 341, "name": "Corphish", "type": ["water"] },
    
    { "id": 342, "name": "Crawdaunt", "type": ["water","dark"] },
    
    { "id": 343, "name": "Baltoy", "type": ["ground","psychic"] },
    
    { "id": 344, "name": "Claydol", "type": ["ground","psychic"] },
    
    { "id": 345, "name": "Lileep", "type": ["rock","grass"] },
    
    { "id": 346, "name": "Cradily", "type": ["rock","grass"] },
    
    { "id": 347, "name": "Anorith", "type": ["rock","bug"] },
    
    { "id": 348, "name": "Armaldo", "type": ["rock","bug"] },
    
    { "id": 349, "name": "Feebas", "type": ["water"] },
    
    { "id": 350, "name": "Milotic", "type": ["water"] },
    
    { "id": 351, "name": "Castform", "type": ["normal"] },
    
    { "id": 352, "name": "Kecleon", "type": ["normal"] },
    
    { "id": 353, "name": "Shuppet", "type": ["ghost"] },
    
    { "id": 354, "name": "Banette", "type": ["ghost"] },
    
    { "id": 355, "name": "Duskull", "type": ["ghost"] },
    
    { "id": 356, "name": "Dusclops", "type": ["ghost"] },
    
    { "id": 357, "name": "Tropius", "type": ["grass","flying"] },
    
    { "id": 358, "name": "Chimecho", "type": ["psychic"] },
    
    { "id": 359, "name": "Absol", "type": ["dark"] },
    
    { "id": 360, "name": "Wynaut", "type": ["psychic"] },
    
    { "id": 361, "name": "Snorunt", "type": ["ice"] },
    
    { "id": 362, "name": "Glalie", "type": ["ice"] },
    
    { "id": 363, "name": "Spheal", "type": ["ice","water"] },
    
    { "id": 364, "name": "Sealeo", "type": ["ice","water"] },
    
    { "id": 365, "name": "Walrein", "type": ["ice","water"] },
    
    { "id": 366, "name": "Clamperl", "type": ["water"] },
    
    { "id": 367, "name": "Huntail", "type": ["water"] },
    
    { "id": 368, "name": "Gorebyss", "type": ["water"] },
    
    { "id": 369, "name": "Relicanth", "type": ["water","rock"] },
    
    { "id": 370, "name": "Luvdisc", "type": ["water"] },
    
    { "id": 371, "name": "Bagon", "type": ["dragon"] },
    
    { "id": 372, "name": "Shelgon", "type": ["dragon"] },
    
    { "id": 373, "name": "Salamence", "type": ["dragon","flying"] },
    
    { "id": 374, "name": "Beldum", "type": ["steel","psychic"] },
    
    { "id": 375, "name": "Metang", "type": ["steel","psychic"] },
    
    { "id": 376, "name": "Metagross", "type": ["steel","psychic"] },
    
    { "id": 377, "name": "Regirock", "type": ["rock"] },
    
    { "id": 378, "name": "Regice", "type": ["ice"] },
    
    { "id": 379, "name": "Registeel", "type": ["steel"] },
    
    { "id": 380, "name": "Latias", "type": ["dragon","psychic"] },
    
    { "id": 381, "name": "Latios", "type": ["dragon","psychic"] },
    
    { "id": 382, "name": "Kyogre", "type": ["water"] },
    
    { "id": 383, "name": "Groudon", "type": ["ground"] },
    
    { "id": 384, "name": "Rayquaza", "type": ["dragon","flying"] },
    
    { "id": 385, "name": "Jirachi", "type": ["steel","psychic"] },
    
    { "id": 386, "name": "Deoxys", "type": ["psychic"] },
    
    { "id": 387, "name": "Turtwig", "type": ["grass"] },
    
    { "id": 388, "name": "Grotle", "type": ["grass"] },
    
    { "id": 389, "name": "Torterra", "type": ["grass","ground"] },
    
    { "id": 390, "name": "Chimchar", "type": ["fire"] },
    
    { "id": 391, "name": "Monferno", "type": ["fire","fighting"] },
    
    { "id": 392, "name": "Infernape", "type": ["fire","fighting"] },
    
    { "id": 393, "name": "Piplup", "type": ["water"] },
    
    { "id": 394, "name": "Prinplup", "type": ["water"] },
    
    { "id": 395, "name": "Empoleon", "type": ["water","steel"] },
    
    { "id": 396, "name": "Starly", "type": ["normal","flying"] },
    
    { "id": 397, "name": "Staravia", "type": ["normal","flying"] },
    
    { "id": 398, "name": "Staraptor", "type": ["normal","flying"] },
    
    { "id": 399, "name": "Bidoof", "type": ["normal"] },
    
    { "id": 400, "name": "Bibarel", "type": ["normal","water"] },
    
    { "id": 401, "name": "Kricketot", "type": ["bug"] },
    
    { "id": 402, "name": "Kricketune", "type": ["bug"] },
    
    { "id": 403, "name": "Shinx", "type": ["electric"] },
    
    { "id": 404, "name": "Luxio", "type": ["electric"] },
    
    { "id": 405, "name": "Luxray", "type": ["electric"] },
    
    { "id": 406, "name": "Budew", "type": ["grass","poison"] },
    
    { "id": 407, "name": "Roserade", "type": ["grass","poison"] },
    
    { "id": 408, "name": "Cranidos", "type": ["rock"] },
    
    { "id": 409, "name": "Rampardos", "type": ["rock"] },
    
    { "id": 410, "name": "Shieldon", "type": ["rock","steel"] },
    
    { "id": 411, "name": "Bastiodon", "type": ["rock","steel"] },
    
    { "id": 412, "name": "Burmy", "type": ["bug"] },
    
    { "id": 413, "name": "Wormadam", "type": ["bug","grass"] },
    
    { "id": 414, "name": "Mothim", "type": ["bug","flying"] },
    
    { "id": 415, "name": "Combee", "type": ["bug","flying"] },
    
    { "id": 416, "name": "Vespiquen", "type": ["bug","flying"] },
    
    { "id": 417, "name": "Pachirisu", "type": ["electric"] },
    
    { "id": 418, "name": "Buizel", "type": ["water"] },
    
    { "id": 419, "name": "Floatzel", "type": ["water"] },
    
    { "id": 420, "name": "Cherubi", "type": ["grass"] },
    
    { "id": 421, "name": "Cherrim", "type": ["grass"] },
    
    { "id": 422, "name": "Shellos", "type": ["water"] },
    
    { "id": 423, "name": "Gastrodon", "type": ["water","ground"] },
    
    { "id": 424, "name": "Ambipom", "type": ["normal"] },
    
    { "id": 425, "name": "Drifloon", "type": ["ghost","flying"] },
    
    { "id": 426, "name": "Drifblim", "type": ["ghost","flying"] },
    
    { "id": 427, "name": "Buneary", "type": ["normal"] },
    
    { "id": 428, "name": "Lopunny", "type": ["normal"] },
    
    { "id": 429, "name": "Mismagius", "type": ["ghost"] },
    
    { "id": 430, "name": "Honchkrow", "type": ["dark","flying"] },
    
    { "id": 431, "name": "Glameow", "type": ["normal"] },
    
    { "id": 432, "name": "Purugly", "type": ["normal"] },
    
    { "id": 433, "name": "Chingling", "type": ["psychic"] },
    
    { "id": 434, "name": "Stunky", "type": ["poison","dark"] },
    
    { "id": 435, "name": "Skuntank", "type": ["poison","dark"] },
    
    { "id": 436, "name": "Bronzor", "type": ["steel","psychic"] },
    
    { "id": 437, "name": "Bronzong", "type": ["steel","psychic"] },
    
    { "id": 438, "name": "Bonsly", "type": ["rock"] },
    
    { "id": 439, "name": "Mime Jr.", "type": ["psychic","fairy"] },
    
    { "id": 440, "name": "Happiny", "type": ["normal"] },
    
    { "id": 441, "name": "Chatot", "type": ["normal","flying"] },
    
    { "id": 442, "name": "Spiritomb", "type": ["ghost","dark"] },
    
    { "id": 443, "name": "Gible", "type": ["dragon","ground"] },
    
    { "id": 444, "name": "Gabite", "type": ["dragon","ground"] },
    
    { "id": 445, "name": "Garchomp", "type": ["dragon","ground"] },
    
    { "id": 446, "name": "Munchlax", "type": ["normal"] },
    
    { "id": 447, "name": "Riolu", "type": ["fighting"] },
    
    { "id": 448, "name": "Lucario", "type": ["fighting","steel"] },
    
    { "id": 449, "name": "Hippopotas", "type": ["ground"] },
    
    { "id": 450, "name": "Hippowdon", "type": ["ground"] },
    
    { "id": 451, "name": "Skorupi", "type": ["poison","bug"] },
    
    { "id": 452, "name": "Drapion", "type": ["poison","dark"] },
    
    { "id": 453, "name": "Croagunk", "type": ["poison","fighting"] },
    
    { "id": 454, "name": "Toxicroak", "type": ["poison","fighting"] },
    
    { "id": 455, "name": "Carnivine", "type": ["grass"] },
    
    { "id": 456, "name": "Finneon", "type": ["water"] },
    
    { "id": 457, "name": "Lumineon", "type": ["water"] },
    
    { "id": 458, "name": "Mantyke", "type": ["water","flying"] },
    
    { "id": 459, "name": "Snover", "type": ["grass","ice"] },
    
    { "id": 460, "name": "Abomasnow", "type": ["grass","ice"] },
    
    { "id": 461, "name": "Weavile", "type": ["dark","ice"] },
    
    { "id": 462, "name": "Magnezone", "type": ["electric","steel"] },
    
    { "id": 463, "name": "Lickilicky", "type": ["normal"] },
    
    { "id": 464, "name": "Rhyperior", "type": ["ground","rock"] },
    
    { "id": 465, "name": "Tangrowth", "type": ["grass"] },
    
    { "id": 466, "name": "Electivire", "type": ["electric"] },
    
    { "id": 467, "name": "Magmortar", "type": ["fire"] },
    
    { "id": 468, "name": "Togekiss", "type": ["fairy","flying"] },
    
    { "id": 469, "name": "Yanmega", "type": ["bug","flying"] },
    
    { "id": 470, "name": "Leafeon", "type": ["grass"] },
    
    { "id": 471, "name": "Glaceon", "type": ["ice"] },
    
    { "id": 472, "name": "Gliscor", "type": ["ground","flying"] },
    
    { "id": 473, "name": "Mamoswine", "type": ["ice","ground"] },
    
    { "id": 474, "name": "Porygon-Z", "type": ["normal"] },
    
    { "id": 475, "name": "Gallade", "type": ["psychic","fighting"] },
    
    { "id": 476, "name": "Probopass", "type": ["rock","steel"] },
    
    { "id": 477, "name": "Dusknoir", "type": ["ghost"] },
    
    { "id": 478, "name": "Froslass", "type": ["ice","ghost"] },
    
    { "id": 479, "name": "Rotom", "type": ["electric","ghost"] },
    
    { "id": 480, "name": "Uxie", "type": ["psychic"] },
    
    { "id": 481, "name": "Mesprit", "type": ["psychic"] },
    
    { "id": 482, "name": "Azelf", "type": ["psychic"] },
    
    { "id": 483, "name": "Dialga", "type": ["steel","dragon"] },
    
    { "id": 484, "name": "Palkia", "type": ["water","dragon"] },
    
    { "id": 485, "name": "Heatran", "type": ["fire","steel"] },
    
    { "id": 486, "name": "Regigigas", "type": ["normal"] },
    
    { "id": 487, "name": "Giratina", "type": ["ghost","dragon"] },
    
    { "id": 488, "name": "Cresselia", "type": ["psychic"] },
    
    { "id": 489, "name": "Phione", "type": ["water"] },
    
    { "id": 490, "name": "Manaphy", "type": ["water"] },
    
    { "id": 491, "name": "Darkrai", "type": ["dark"] },
    
    { "id": 492, "name": "Shaymin", "type": ["grass"] },
    
    { "id": 493, "name": "Arceus", "type": ["normal"] },
    
    { "id": 494, "name": "Victini", "type": ["psychic","fire"] },
    
    { "id": 495, "name": "Snivy", "type": ["grass"] },
    
    { "id": 496, "name": "Servine", "type": ["grass"] },
    
    { "id": 497, "name": "Serperior", "type": ["grass"] },
    
    { "id": 498, "name": "Tepig", "type": ["fire"] },
    
    { "id": 499, "name": "Pignite", "type": ["fire","fighting"] },
    
    { "id": 500, "name": "Emboar", "type": ["fire","fighting"] },
    
    { "id": 501, "name": "Oshawott", "type": ["water"] },
    
    { "id": 502, "name": "Dewott", "type": ["water"] },
    
    { "id": 503, "name": "Samurott", "type": ["water"] },
    
    { "id": 504, "name": "Patrat", "type": ["normal"] },
    
    { "id": 505, "name": "Watchog", "type": ["normal"] },
    
    { "id": 506, "name": "Lillipup", "type": ["normal"] },
    
    { "id": 507, "name": "Herdier", "type": ["normal"] },
    
    { "id": 508, "name": "Stoutland", "type": ["normal"] },
    
    { "id": 509, "name": "Purrloin", "type": ["dark"] },
    
    { "id": 510, "name": "Liepard", "type": ["dark"] },
    
    { "id": 511, "name": "Pansage", "type": ["grass"] },
    
    { "id": 512, "name": "Simisage", "type": ["grass"] },
    
    { "id": 513, "name": "Pansear", "type": ["fire"] },
    
    { "id": 514, "name": "Simisear", "type": ["fire"] },
    
    { "id": 515, "name": "Panpour", "type": ["water"] },
    
    { "id": 516, "name": "Simipour", "type": ["water"] },
    
    { "id": 517, "name": "Munna", "type": ["psychic"] },
    
    { "id": 518, "name": "Musharna", "type": ["psychic"] },
    
    { "id": 519, "name": "Pidove", "type": ["normal","flying"] },
    
    { "id": 520, "name": "Tranquill", "type": ["normal","flying"] },
    
    { "id": 521, "name": "Unfezant", "type": ["normal","flying"] },
    
    { "id": 522, "name": "Blitzle", "type": ["electric"] },
    
    { "id": 523, "name": "Zebstrika", "type": ["electric"] },
    
    { "id": 524, "name": "Roggenrola", "type": ["rock"] },
    
    { "id": 525, "name": "Boldore", "type": ["rock"] },
    
    { "id": 526, "name": "Gigalith", "type": ["rock"] },
    
    { "id": 527, "name": "Woobat", "type": ["psychic","flying"] },
    
    { "id": 528, "name": "Swoobat", "type": ["psychic","flying"] },
    
    { "id": 529, "name": "Drilbur", "type": ["ground"] },
    
    { "id": 530, "name": "Excadrill", "type": ["ground","steel"] },
    
    { "id": 531, "name": "Audino", "type": ["normal"] },
    
    { "id": 532, "name": "Timburr", "type": ["fighting"] },
    
    { "id": 533, "name": "Gurdurr", "type": ["fighting"] },
    
    { "id": 534, "name": "Conkeldurr", "type": ["fighting"] },
    
    { "id": 535, "name": "Tympole", "type": ["water"] },
    
    { "id": 536, "name": "Palpitoad", "type": ["water","ground"] },
    
    { "id": 537, "name": "Seismitoad", "type": ["water","ground"] },
    
    { "id": 538, "name": "Throh", "type": ["fighting"] },
    
    { "id": 539, "name": "Sawk", "type": ["fighting"] },
    
    { "id": 540, "name": "Sewaddle", "type": ["bug","grass"] },
    
    { "id": 541, "name": "Swadloon", "type": ["bug","grass"] },
    
    { "id": 542, "name": "Leavanny", "type": ["bug","grass"] },
    
    { "id": 543, "name": "Venipede", "type": ["bug","poison"] },
    
    { "id": 544, "name": "Whirlipede", "type": ["bug","poison"] },
    
    { "id": 545, "name": "Scolipede", "type": ["bug","poison"] },
    
    { "id": 546, "name": "Cottonee", "type": ["grass","fairy"] },
    
    { "id": 547, "name": "Whimsicott", "type": ["grass","fairy"] },
    
    { "id": 548, "name": "Petilil", "type": ["grass"] },
    
    { "id": 549, "name": "Lilligant", "type": ["grass"] },
    
    { "id": 550, "name": "Basculin", "type": ["water"] },
    
    { "id": 551, "name": "Sandile", "type": ["ground","dark"] },
    
    { "id": 552, "name": "Krokorok", "type": ["ground","dark"] },
    
    { "id": 553, "name": "Krookodile", "type": ["ground","dark"] },
    
    { "id": 554, "name": "Darumaka", "type": ["fire"] },
    
    { "id": 555, "name": "Darmanitan", "type": ["fire"] },
    
    { "id": 556, "name": "Maractus", "type": ["grass"] },
    
    { "id": 557, "name": "Dwebble", "type": ["bug","rock"] },
    
    { "id": 558, "name": "Crustle", "type": ["bug","rock"] },
    
    { "id": 559, "name": "Scraggy", "type": ["dark","fighting"] },
    
    { "id": 560, "name": "Scrafty", "type": ["dark","fighting"] },
    
    { "id": 561, "name": "Sigilyph", "type": ["psychic","flying"] },
    
    { "id": 562, "name": "Yamask", "type": ["ghost"] },
    
    { "id": 563, "name": "Cofagrigus", "type": ["ghost"] },
    
    { "id": 564, "name": "Tirtouga", "type": ["water","rock"] },
    
    { "id": 565, "name": "Carracosta", "type": ["water","rock"] },
    
    { "id": 566, "name": "Archen", "type": ["rock","flying"] },
    
    { "id": 567, "name": "Archeops", "type": ["rock","flying"] },
    
    { "id": 568, "name": "Trubbish", "type": ["poison"] },
    
    { "id": 569, "name": "Garbodor", "type": ["poison"] },
    
    { "id": 570, "name": "Zorua", "type": ["dark"] },
    
    { "id": 571, "name": "Zoroark", "type": ["dark"] },
    
    { "id": 572, "name": "Minccino", "type": ["normal"] },
    
    { "id": 573, "name": "Cinccino", "type": ["normal"] },
    
    { "id": 574, "name": "Gothita", "type": ["psychic"] },
    
    { "id": 575, "name": "Gothorita", "type": ["psychic"] },
    
    { "id": 576, "name": "Gothitelle", "type": ["psychic"] },
    
    { "id": 577, "name": "Solosis", "type": ["psychic"] },
    
    { "id": 578, "name": "Duosion", "type": ["psychic"] },
    
    { "id": 579, "name": "Reuniclus", "type": ["psychic"] },
    
    { "id": 580, "name": "Ducklett", "type": ["water","flying"] },
    
    { "id": 581, "name": "Swanna", "type": ["water","flying"] },
    
    { "id": 582, "name": "Vanillite", "type": ["ice"] },
    
    { "id": 583, "name": "Vanillish", "type": ["ice"] },
    
    { "id": 584, "name": "Vanilluxe", "type": ["ice"] },
    
    { "id": 585, "name": "Deerling", "type": ["normal","grass"] },
    
    { "id": 586, "name": "Sawsbuck", "type": ["normal","grass"] },
    
    { "id": 587, "name": "Emolga", "type": ["electric","flying"] },
    
    { "id": 588, "name": "Karrablast", "type": ["bug"] },
    
    { "id": 589, "name": "Escavalier", "type": ["bug","steel"] },
    
    { "id": 590, "name": "Foongus", "type": ["grass","poison"] },
    
    { "id": 591, "name": "Amoonguss", "type": ["grass","poison"] },
    
    { "id": 592, "name": "Frillish", "type": ["water","ghost"] },
    
    { "id": 593, "name": "Jellicent", "type": ["water","ghost"] },
    
    { "id": 594, "name": "Alomomola", "type": ["water"] },
    
    { "id": 595, "name": "Joltik", "type": ["bug","electric"] },
    
    { "id": 596, "name": "Galvantula", "type": ["bug","electric"] },
    
    { "id": 597, "name": "Ferroseed", "type": ["grass","steel"] },
    
    { "id": 598, "name": "Ferrothorn", "type": ["grass","steel"] },
    
    { "id": 599, "name": "Klink", "type": ["steel"] },
    
    { "id": 600, "name": "Klang", "type": ["steel"] },
    
    { "id": 601, "name": "Klinklang", "type": ["steel"] },
    
    { "id": 602, "name": "Tynamo", "type": ["electric"] },
    
    { "id": 603, "name": "Eelektrik", "type": ["electric"] },
    
    { "id": 604, "name": "Eelektross", "type": ["electric"] },
    
    { "id": 605, "name": "Elgyem", "type": ["psychic"] },
    
    { "id": 606, "name": "Beheeyem", "type": ["psychic"] },
    
    { "id": 607, "name": "Litwick", "type": ["ghost","fire"] },
    
    { "id": 608, "name": "Lampent", "type": ["ghost","fire"] },
    
    { "id": 609, "name": "Chandelure", "type": ["ghost","fire"] },
    
    { "id": 610, "name": "Axew", "type": ["dragon"] },
    
    { "id": 611, "name": "Fraxure", "type": ["dragon"] },
    
    { "id": 612, "name": "Haxorus", "type": ["dragon"] },
    
    { "id": 613, "name": "Cubchoo", "type": ["ice"] },
    
    { "id": 614, "name": "Beartic", "type": ["ice"] },
    
    { "id": 615, "name": "Cryogonal", "type": ["ice"] },
    
    { "id": 616, "name": "Shelmet", "type": ["bug"] },
    
    { "id": 617, "name": "Accelgor", "type": ["bug"] },
    
    { "id": 618, "name": "Stunfisk", "type": ["ground","electric"] },
    
    { "id": 619, "name": "Mienfoo", "type": ["fighting"] },
    
    { "id": 620, "name": "Mienshao", "type": ["fighting"] },
    
    { "id": 621, "name": "Druddigon", "type": ["dragon"] },
    
    { "id": 622, "name": "Golett", "type": ["ground","ghost"] },
    
    { "id": 623, "name": "Golurk", "type": ["ground","ghost"] },
    
    { "id": 624, "name": "Pawniard", "type": ["dark","steel"] },
    
    { "id": 625, "name": "Bisharp", "type": ["dark","steel"] },
    
    { "id": 626, "name": "Bouffalant", "type": ["normal"] },
    
    { "id": 627, "name": "Rufflet", "type": ["normal","flying"] },
    
    { "id": 628, "name": "Braviary", "type": ["normal","flying"] },
    
    { "id": 629, "name": "Vullaby", "type": ["dark","flying"] },
    
    { "id": 630, "name": "Mandibuzz", "type": ["dark","flying"] },
    
    { "id": 631, "name": "Heatmor", "type": ["fire"] },
    
    { "id": 632, "name": "Durant", "type": ["bug","steel"] },
    
    { "id": 633, "name": "Deino", "type": ["dark","dragon"] },
    
    { "id": 634, "name": "Zweilous", "type": ["dark","dragon"] },
    
    { "id": 635, "name": "Hydreigon", "type": ["dark","dragon"] },
    
    { "id": 636, "name": "Larvesta", "type": ["bug","fire"] },
    
    { "id": 637, "name": "Volcarona", "type": ["bug","fire"] },
    
    { "id": 638, "name": "Cobalion", "type": ["steel","fighting"] },
    
    { "id": 639, "name": "Terrakion", "type": ["rock","fighting"] },
    
    { "id": 640, "name": "Virizion", "type": ["grass","fighting"] },
    
    { "id": 641, "name": "Tornadus", "type": ["flying"] },
    
    { "id": 642, "name": "Thundurus", "type": ["electric","flying"] },
    
    { "id": 643, "name": "Reshiram", "type": ["dragon","fire"] },
    
    { "id": 644, "name": "Zekrom", "type": ["dragon","electric"] },
    
    { "id": 645, "name": "Landorus", "type": ["ground","flying"] },
    
    { "id": 646, "name": "Kyurem", "type": ["dragon","ice"] },
    
    { "id": 647, "name": "Keldeo", "type": ["water","fighting"] },
    
    { "id": 648, "name": "Meloetta", "type": ["normal","psychic"] },
    
    { "id": 649, "name": "Genesect", "type": ["bug","steel"] },
    
    { "id": 650, "name": "Chespin", "type": ["grass"] },
    
    { "id": 651, "name": "Quilladin", "type": ["grass"] },
    
    { "id": 652, "name": "Chesnaught", "type": ["grass","fighting"] },
    
    { "id": 653, "name": "Fennekin", "type": ["fire"] },
    
    { "id": 654, "name": "Braixen", "type": ["fire"] },
    
    { "id": 655, "name": "Delphox", "type": ["fire","psychic"] },
    
    { "id": 656, "name": "Froakie", "type": ["water"] },
    
    { "id": 657, "name": "Frogadier", "type": ["water"] },
    
    { "id": 658, "name": "Greninja", "type": ["water","dark"] },
    
    { "id": 659, "name": "Bunnelby", "type": ["normal"] },
    
    { "id": 660, "name": "Diggersby", "type": ["normal","ground"] },
    
    { "id": 661, "name": "Fletchling", "type": ["normal","flying"] },
    
    { "id": 662, "name": "Fletchinder", "type": ["fire","flying"] },
    
    { "id": 663, "name": "Talonflame", "type": ["fire","flying"] },
    
    { "id": 664, "name": "Scatterbug", "type": ["bug"] },
    
    { "id": 665, "name": "Spewpa", "type": ["bug"] },
    
    { "id": 666, "name": "Vivillon", "type": ["bug","flying"] },
    
    { "id": 667, "name": "Litleo", "type": ["fire","normal"] },
    
    { "id": 668, "name": "Pyroar", "type": ["fire","normal"] },
    
    { "id": 669, "name": "Flabébé", "type": ["fairy"] },
    
    { "id": 670, "name": "Floette", "type": ["fairy"] },
    
    { "id": 671, "name": "Florges", "type": ["fairy"] },
    
    { "id": 672, "name": "Skiddo", "type": ["grass"] },
    
    { "id": 673, "name": "Gogoat", "type": ["grass"] },
    
    { "id": 674, "name": "Pancham", "type": ["fighting"] },
    
    { "id": 675, "name": "Pangoro", "type": ["fighting","dark"] },
    
    { "id": 676, "name": "Furfrou", "type": ["normal"] },
    
    { "id": 677, "name": "Espurr", "type": ["psychic"] },
    
    { "id": 678, "name": "Meowstic", "type": ["psychic"] },
    
    { "id": 679, "name": "Honedge", "type": ["steel","ghost"] },
    
    { "id": 680, "name": "Doublade", "type": ["steel","ghost"] },
    
    { "id": 681, "name": "Aegislash", "type": ["steel","ghost"] },
    
    { "id": 682, "name": "Spritzee", "type": ["fairy"] },
    
    { "id": 683, "name": "Aromatisse", "type": ["fairy"] },
    
    { "id": 684, "name": "Swirlix", "type": ["fairy"] },
    
    { "id": 685, "name": "Slurpuff", "type": ["fairy"] },
    
    { "id": 686, "name": "Inkay", "type": ["dark","psychic"] },
    
    { "id": 687, "name": "Malamar", "type": ["dark","psychic"] },
    
    { "id": 688, "name": "Binacle", "type": ["rock","water"] },
    
    { "id": 689, "name": "Barbaracle", "type": ["rock","water"] },
    
    { "id": 690, "name": "Skrelp", "type": ["poison","water"] },
    
    { "id": 691, "name": "Dragalge", "type": ["poison","dragon"] },
    
    { "id": 692, "name": "Clauncher", "type": ["water"] },
    
    { "id": 693, "name": "Clawitzer", "type": ["water"] },
    
    { "id": 694, "name": "Helioptile", "type": ["electric","normal"] },
    
    { "id": 695, "name": "Heliolisk", "type": ["electric","normal"] },
    
    { "id": 696, "name": "Tyrunt", "type": ["rock","dragon"] },
    
    { "id": 697, "name": "Tyrantrum", "type": ["rock","dragon"] },
    
    { "id": 698, "name": "Amaura", "type": ["rock","ice"] },
    
    { "id": 699, "name": "Aurorus", "type": ["rock","ice"] },
    
    { "id": 700, "name": "Sylveon", "type": ["fairy"] },
    
    { "id": 701, "name": "Hawlucha", "type": ["fighting","flying"] },
    
    { "id": 702, "name": "Dedenne", "type": ["electric","fairy"] },
    
    { "id": 703, "name": "Carbink", "type": ["rock","fairy"] },
    
    { "id": 704, "name": "Goomy", "type": ["dragon"] },
    
    { "id": 705, "name": "Sliggoo", "type": ["dragon"] },
    
    { "id": 706, "name": "Goodra", "type": ["dragon"] },
    
    { "id": 707, "name": "Klefki", "type": ["steel","fairy"] },
    
    { "id": 708, "name": "Phantump", "type": ["ghost","grass"] },
    
    { "id": 709, "name": "Trevenant", "type": ["ghost","grass"] },
    
    { "id": 710, "name": "Pumpkaboo", "type": ["ghost","grass"] },
    
    { "id": 711, "name": "Gourgeist", "type": ["ghost","grass"] },
    
    { "id": 712, "name": "Bergmite", "type": ["ice"] },
    
    { "id": 713, "name": "Avalugg", "type": ["ice"] },
    
    { "id": 714, "name": "Noibat", "type": ["flying","dragon"] },
    
    { "id": 715, "name": "Noivern", "type": ["flying","dragon"] },
    
    { "id": 716, "name": "Xerneas", "type": ["fairy"] },
    
    { "id": 717, "name": "Yveltal", "type": ["dark","flying"] },
    
    { "id": 718, "name": "Zygarde", "type": ["dragon","ground"] },
    
    { "id": 719, "name": "Diancie", "type": ["rock","fairy"] },
    
    { "id": 720, "name": "Hoopa", "type": ["psychic","ghost"] },
    
    { "id": 721, "name": "Volcanion", "type": ["fire","water"] },
    
    { "id": 722, "name": "Rowlet", "type": ["grass","flying"] },
    
    { "id": 723, "name": "Dartrix", "type": ["grass","flying"] },
    
    { "id": 724, "name": "Decidueye", "type": ["grass","ghost"] },
    
    { "id": 725, "name": "Litten", "type": ["fire"] },
    
    { "id": 726, "name": "Torracat", "type": ["fire"] },
    
    { "id": 727, "name": "Incineroar", "type": ["fire","dark"] },
    
    { "id": 728, "name": "Popplio", "type": ["water"] },
    
    { "id": 729, "name": "Brionne", "type": ["water"] },
    
    { "id": 730, "name": "Primarina", "type": ["water","fairy"] },
    
    { "id": 731, "name": "Pikipek", "type": ["normal","flying"] },
    
    { "id": 732, "name": "Trumbeak", "type": ["normal","flying"] },
    
    { "id": 733, "name": "Toucannon", "type": ["normal","flying"] },
    
    { "id": 734, "name": "Yungoos", "type": ["normal"] },
    
    { "id": 735, "name": "Gumshoos", "type": ["normal"] },
    
    { "id": 736, "name": "Grubbin", "type": ["bug"] },
    
    { "id": 737, "name": "Charjabug", "type": ["bug","electric"] },
    
    { "id": 738, "name": "Vikavolt", "type": ["bug","electric"] },
    
    { "id": 739, "name": "Crabrawler", "type": ["fighting"] },
    
    { "id": 740, "name": "Crabominable", "type": ["fighting","ice"] },
    
    { "id": 741, "name": "Oricorio", "type": ["fire","flying"] },
    
    { "id": 742, "name": "Cutiefly", "type": ["bug","fairy"] },
    
    { "id": 743, "name": "Ribombee", "type": ["bug","fairy"] },
    
    { "id": 744, "name": "Rockruff", "type": ["rock"] },
    
    { "id": 745, "name": "Lycanroc", "type": ["rock"] },
    
    { "id": 746, "name": "Wishiwashi", "type": ["water"] },
    
    { "id": 747, "name": "Mareanie", "type": ["poison","water"] },
    
    { "id": 748, "name": "Toxapex", "type": ["poison","water"] },
    
    { "id": 749, "name": "Mudbray", "type": ["ground"] },
    
    { "id": 750, "name": "Mudsdale", "type": ["ground"] },
    
    { "id": 751, "name": "Dewpider", "type": ["water","bug"] },
    
    { "id": 752, "name": "Araquanid", "type": ["water","bug"] },
    
    { "id": 753, "name": "Fomantis", "type": ["grass"] },
    
    { "id": 754, "name": "Lurantis", "type": ["grass"] },
    
    { "id": 755, "name": "Morelull", "type": ["grass","fairy"] },
    
    { "id": 756, "name": "Shiinotic", "type": ["grass","fairy"] },
    
    { "id": 757, "name": "Salandit", "type": ["poison","fire"] },
    
    { "id": 758, "name": "Salazzle", "type": ["poison","fire"] },
    
    { "id": 759, "name": "Stufful", "type": ["normal","fighting"] },
    
    { "id": 760, "name": "Bewear", "type": ["normal","fighting"] },
    
    { "id": 761, "name": "Bounsweet", "type": ["grass"] },
    
    { "id": 762, "name": "Steenee", "type": ["grass"] },
    
    { "id": 763, "name": "Tsareena", "type": ["grass"] },
    
    { "id": 764, "name": "Comfey", "type": ["fairy"] },
    
    { "id": 765, "name": "Oranguru", "type": ["normal","psychic"] },
    
    { "id": 766, "name": "Passimian", "type": ["fighting"] },
    
    { "id": 767, "name": "Wimpod", "type": ["bug","water"] },
    
    { "id": 768, "name": "Golisopod", "type": ["bug","water"] },
    
    { "id": 769, "name": "Sandygast", "type": ["ghost","ground"] },
    
    { "id": 770, "name": "Palossand", "type": ["ghost","ground"] },
    
    { "id": 771, "name": "Pyukumuku", "type": ["water"] },
    
    { "id": 772, "name": "Type: Null", "type": ["normal"] },
    
    { "id": 773, "name": "Silvally", "type": ["normal"] },
    
    { "id": 774, "name": "Minior", "type": ["rock","flying"] },
    
    { "id": 775, "name": "Komala", "type": ["normal"] },
    
    { "id": 776, "name": "Turtonator", "type": ["fire","dragon"] },
    
    { "id": 777, "name": "Togedemaru", "type": ["electric","steel"] },
    
    { "id": 778, "name": "Mimikyu", "type": ["ghost","fairy"] },
    
    { "id": 779, "name": "Bruxish", "type": ["water","psychic"] },
    
    { "id": 780, "name": "Drampa", "type": ["normal","dragon"] },
    
    { "id": 781, "name": "Dhelmise", "type": ["ghost","grass"] },
    
    { "id": 782, "name": "Jangmo-o", "type": ["dragon"] },
    
    { "id": 783, "name": "Hakamo-o", "type": ["dragon","fighting"] },
    
    { "id": 784, "name": "Kommo-o", "type": ["dragon","fighting"] },
    
    { "id": 785, "name": "Tapu Koko", "type": ["electric","fairy"] },
    
    { "id": 786, "name": "Tapu Lele", "type": ["psychic","fairy"] },
    
    { "id": 787, "name": "Tapu Bulu", "type": ["grass","fairy"] },
    
    { "id": 788, "name": "Tapu Fini", "type": ["water","fairy"] },
    
    { "id": 789, "name": "Cosmog", "type": ["psychic"] },
    
    { "id": 790, "name": "Cosmoem", "type": ["psychic"] },
    
    { "id": 791, "name": "Solgaleo", "type": ["psychic","steel"] },
    
    { "id": 792, "name": "Lunala", "type": ["psychic","ghost"] },
    
    { "id": 793, "name": "Nihilego", "type": ["rock","poison"] },
    
    { "id": 794, "name": "Buzzwole", "type": ["bug","fighting"] },
    
    { "id": 795, "name": "Pheromosa", "type": ["bug","fighting"] },
    
    { "id": 796, "name": "Xurkitree", "type": ["electric"] },
    
    { "id": 797, "name": "Celesteela", "type": ["steel","flying"] },
    
    { "id": 798, "name": "Kartana", "type": ["grass","steel"] },
    
    { "id": 799, "name": "Guzzlord", "type": ["dark","dragon"] },
    
    { "id": 800, "name": "Necrozma", "type": ["psychic"] },
    
    { "id": 801, "name": "Magearna", "type": ["steel","fairy"] },
    
    { "id": 802, "name": "Marshadow", "type": ["fighting","ghost"] },
    
    { "id": 803, "name": "Poipole", "type": ["poison"] },
    
    { "id": 804, "name": "Naganadel", "type": ["poison","dragon"] },
    
    { "id": 805, "name": "Stakataka", "type": ["rock","steel"] },
    
    { "id": 806, "name": "Blacephalon", "type": ["fire","ghost"] },
    
    { "id": 807, "name": "Zeraora", "type": ["electric"] },
    
    { "id": 808, "name": "Meltan", "type": ["steel"] },
    
    { "id": 809, "name": "Melmetal", "type": ["steel"] },
    
    { "id": 810, "name": "Grookey", "type": ["grass"] },
    
    { "id": 811, "name": "Thwackey", "type": ["grass"] },
    
    { "id": 812, "name": "Rillaboom", "type": ["grass"] },
    
    { "id": 813, "name": "Scorbunny", "type": ["fire"] },
    
    { "id": 814, "name": "Raboot", "type": ["fire"] },
    
    { "id": 815, "name": "Cinderace", "type": ["fire"] },
    
    { "id": 816, "name": "Sobble", "type": ["water"] },
    
    { "id": 817, "name": "Drizzile", "type": ["water"] },
    
    { "id": 818, "name": "Inteleon", "type": ["water"] },
    
    { "id": 819, "name": "Skwovet", "type": ["normal"] },
    
    { "id": 820, "name": "Greedent", "type": ["normal"] },
    
    { "id": 821, "name": "Rookidee", "type": ["flying"] },
    
    { "id": 822, "name": "Corvisquire", "type": ["flying"] },
    
    { "id": 823, "name": "Corviknight", "type": ["flying","steel"] },
    
    { "id": 824, "name": "Blipbug", "type": ["bug"] },
    
    { "id": 825, "name": "Dottler", "type": ["bug","psychic"] },
    
    { "id": 826, "name": "Orbeetle", "type": ["bug","psychic"] },
    
    { "id": 827, "name": "Nickit", "type": ["dark"] },
    
    { "id": 828, "name": "Thievul", "type": ["dark"] },
    
    { "id": 829, "name": "Gossifleur", "type": ["grass"] },
    
    { "id": 830, "name": "Eldegoss", "type": ["grass"] },
    
    { "id": 831, "name": "Wooloo", "type": ["normal"] },
    
    { "id": 832, "name": "Dubwool", "type": ["normal"] },
    
    { "id": 833, "name": "Chewtle", "type": ["water"] },
    
    { "id": 834, "name": "Drednaw", "type": ["water","rock"] },
    
    { "id": 835, "name": "Yamper", "type": ["electric"] },
    
    { "id": 836, "name": "Boltund", "type": ["electric"] },
    
    { "id": 837, "name": "Rolycoly", "type": ["rock"] },
    
    { "id": 838, "name": "Carkol", "type": ["rock","fire"] },
    
    { "id": 839, "name": "Coalossal", "type": ["rock","fire"] },
    
    { "id": 840, "name": "Applin", "type": ["grass","dragon"] },
    
    { "id": 841, "name": "Flapple", "type": ["grass","dragon"] },
    
    { "id": 842, "name": "Appletun", "type": ["grass","dragon"] },
    
    { "id": 843, "name": "Silicobra", "type": ["ground"] },
    
    { "id": 844, "name": "Sandaconda", "type": ["ground"] },
    
    { "id": 845, "name": "Cramorant", "type": ["flying","water"] },
    
    { "id": 846, "name": "Arrokuda", "type": ["water"] },
    
    { "id": 847, "name": "Barraskewda", "type": ["water"] },
    
    { "id": 848, "name": "Toxel", "type": ["electric","poison"] },
    
    { "id": 849, "name": "Toxtricity", "type": ["electric","poison"] },
    
    { "id": 850, "name": "Sizzlipede", "type": ["fire","bug"] },
    
    { "id": 851, "name": "Centiskorch", "type": ["fire","bug"] },
    
    { "id": 852, "name": "Clobbopus", "type": ["fighting"] },
    
    { "id": 853, "name": "Grapploct", "type": ["fighting"] },
    
    { "id": 854, "name": "Sinistea", "type": ["ghost"] },
    
    { "id": 855, "name": "Polteageist", "type": ["ghost"] },
    
    { "id": 856, "name": "Hatenna", "type": ["psychic"] },
    
    { "id": 857, "name": "Hattrem", "type": ["psychic"] },
    
    { "id": 858, "name": "Hatterene", "type": ["psychic","fairy"] },
    
    { "id": 859, "name": "Impidimp", "type": ["dark","fairy"] },
    
    { "id": 860, "name": "Morgrem", "type": ["dark","fairy"] },
    
    { "id": 861, "name": "Grimmsnarl", "type": ["dark","fairy"] },
    
    { "id": 862, "name": "Obstagoon", "type": ["dark","normal"] },
    
    { "id": 863, "name": "Perrserker", "type": ["steel"] },
    
    { "id": 864, "name": "Cursola", "type": ["ghost"] },
    
    { "id": 865, "name": "Sirfetch'd", "type": ["fighting"] },
    
    { "id": 866, "name": "Mr. Rime", "type": ["ice","psychic"] },
    
    { "id": 867, "name": "Runerigus", "type": ["ground","ghost"] },
    
    { "id": 868, "name": "Milcery", "type": ["fairy"] },
    
    { "id": 869, "name": "Alcremie", "type": ["fairy"] },
    
    { "id": 870, "name": "Falinks", "type": ["fighting"] },
    
    { "id": 871, "name": "Pincurchin", "type": ["electric"] },
    
    { "id": 872, "name": "Snom", "type": ["ice","bug"] },
    
    { "id": 873, "name": "Frosmoth", "type": ["ice","bug"] },
    
    { "id": 874, "name": "Stonjourner", "type": ["rock"] },
    
    { "id": 875, "name": "Eiscue", "type": ["ice"] },
    
    { "id": 876, "name": "Indeedee", "type": ["psychic","normal"] },
    
    { "id": 877, "name": "Morpeko", "type": ["electric","dark"] },
    
    { "id": 878, "name": "Cufant", "type": ["steel"] },
    
    { "id": 879, "name": "Copperajah", "type": ["steel"] },
    
    { "id": 880, "name": "Dracozolt", "type": ["electric","dragon"] },
    
    { "id": 881, "name": "Arctozolt", "type": ["electric","ice"] },
    
    { "id": 882, "name": "Dracovish", "type": ["water","dragon"] },
    
    { "id": 883, "name": "Arctovish", "type": ["water","ice"] },
    
    { "id": 884, "name": "Duraludon", "type": ["steel","dragon"] },
    
    { "id": 885, "name": "Dreepy", "type": ["dragon","ghost"] },
    
    { "id": 886, "name": "Drakloak", "type": ["dragon","ghost"] },
    
    { "id": 887, "name": "Dragapult", "type": ["dragon","ghost"] },
    
    { "id": 888, "name": "Zacian", "type": ["fairy"] },
    
    { "id": 889, "name": "Zamazenta", "type": ["fighting"] },
    
    { "id": 890, "name": "Eternatus", "type": ["poison","dragon"] },
    
    { "id": 891, "name": "Kubfu", "type": ["fighting"] },
    
    { "id": 892, "name": "Urshifu", "type": ["fighting","dark"] },
    
    { "id": 893, "name": "Zarude", "type": ["dark","grass"] },
    
    { "id": 894, "name": "Regieleki", "type": ["electric"] },
    
    { "id": 895, "name": "Regidrago", "type": ["dragon"] },
    
    { "id": 896, "name": "Glastrier", "type": ["ice"] },
    
    { "id": 897, "name": "Spectrier", "type": ["ghost"] },
    
    { "id": 898, "name": "Calyrex", "type": ["psychic","grass"] },
    
    { "id": 899, "name": "Wyrdeer", "type": ["normal","psychic"] },
    
    { "id": 900, "name": "Kleavor", "type": ["bug","rock"] },
    
    { "id": 901, "name": "Ursaluna", "type": ["ground","normal"] },
    
    { "id": 902, "name": "Basculegion", "type": ["water","ghost"] },
    
    { "id": 903, "name": "Sneasler", "type": ["fighting","poison"] },
    
    { "id": 904, "name": "Overqwil", "type": ["dark","poison"] },
    
    { "id": 905, "name": "Enamorus", "type": ["fairy","flying"] },
    
    { "id": 906, "name": "Sprigatito", "type": ["grass"] },
    
    { "id": 907, "name": "Floragato", "type": ["grass"] },
    
    { "id": 908, "name": "Meowscarada", "type": ["grass","dark"] },
    
    { "id": 909, "name": "Fuecoco", "type": ["fire"] },
    
    { "id": 910, "name": "Crocalor", "type": ["fire"] },
    
    { "id": 911, "name": "Skeledirge", "type": ["fire","ghost"] },
    
    { "id": 912, "name": "Quaxly", "type": ["water"] },
    
    { "id": 913, "name": "Quaxwell", "type": ["water"] },
    
    { "id": 914, "name": "Quaquaval", "type": ["water","fighting"] },
    
    { "id": 915, "name": "Lechonk", "type": ["normal"] },
    
    { "id": 916, "name": "Oinkologne", "type": ["normal"] },
    
    { "id": 917, "name": "Tarountula", "type": ["bug"] },
    
    { "id": 918, "name": "Spidops", "type": ["bug"] },
    
    { "id": 919, "name": "Nymble", "type": ["bug"] },
    
    { "id": 920, "name": "Lokix", "type": ["bug","dark"] },
    
    { "id": 921, "name": "Pawmi", "type": ["electric"] },
    
    { "id": 922, "name": "Pawmo", "type": ["electric","fighting"] },
    
    { "id": 923, "name": "Pawmot", "type": ["electric","fighting"] },
    
    { "id": 924, "name": "Tandemaus", "type": ["normal"] },
    
    { "id": 925, "name": "Maushold", "type": ["normal"] },
    
    { "id": 926, "name": "Fidough", "type": ["fairy"] },
    
    { "id": 927, "name": "Dachsbun", "type": ["fairy"] },
    
    { "id": 928, "name": "Smoliv", "type": ["grass","normal"] },
    
    { "id": 929, "name": "Dolliv", "type": ["grass","normal"] },
    
    { "id": 930, "name": "Arboliva", "type": ["grass","normal"] },
    
    { "id": 931, "name": "Squawkabilly", "type": ["normal","flying"] },
    
    { "id": 932, "name": "Nacli", "type": ["rock"] },
    
    { "id": 933, "name": "Naclstack", "type": ["rock"] },
    
    { "id": 934, "name": "Garganacl", "type": ["rock"] },
    
    { "id": 935, "name": "Charcadet", "type": ["fire"] },
    
    { "id": 936, "name": "Armarouge", "type": ["fire","psychic"] },
    
    { "id": 937, "name": "Ceruledge", "type": ["fire","ghost"] },
    
    { "id": 938, "name": "Tadbulb", "type": ["electric"] },
    
    { "id": 939, "name": "Bellibolt", "type": ["electric"] },
    
    { "id": 940, "name": "Wattrel", "type": ["electric","flying"] },
    
    { "id": 941, "name": "Kilowattrel", "type": ["electric","flying"] },
    
    { "id": 942, "name": "Maschiff", "type": ["dark"] },
    
    { "id": 943, "name": "Mabosstiff", "type": ["dark"] },
    
    { "id": 944, "name": "Shroodle", "type": ["poison","normal"] },
    
    { "id": 945, "name": "Grafaiai", "type": ["poison","normal"] },
    
    { "id": 946, "name": "Bramblin", "type": ["grass","ghost"] },
    
    { "id": 947, "name": "Brambleghast", "type": ["grass","ghost"] },
    
    { "id": 948, "name": "Toedscool", "type": ["ground","grass"] },
    
    { "id": 949, "name": "Toedscruel", "type": ["ground","grass"] },
    
    { "id": 950, "name": "Klawf", "type": ["rock"] },
    
    { "id": 951, "name": "Capsakid", "type": ["grass"] },
    
    { "id": 952, "name": "Scovillain", "type": ["grass","fire"] },
    
    { "id": 953, "name": "Rellor", "type": ["bug"] },
    
    { "id": 954, "name": "Rabsca", "type": ["bug","psychic"] },
    
    { "id": 955, "name": "Flittle", "type": ["psychic"] },
    
    { "id": 956, "name": "Espathra", "type": ["psychic"] },
    
    { "id": 957, "name": "Tinkatink", "type": ["fairy","steel"] },
    
    { "id": 958, "name": "Tinkatuff", "type": ["fairy","steel"] },
    
    { "id": 959, "name": "Tinkaton", "type": ["fairy","steel"] },
    
    { "id": 960, "name": "Wiglett", "type": ["water"] },
    
    { "id": 961, "name": "Wugtrio", "type": ["water"] },
    
    { "id": 962, "name": "Bombirdier", "type": ["flying","dark"] },
    
    { "id": 963, "name": "Finizen", "type": ["water"] },
    
    { "id": 964, "name": "Palafin", "type": ["water"] },
    
    { "id": 965, "name": "Varoom", "type": ["steel","poison"] },
    
    { "id": 966, "name": "Revavroom", "type": ["steel","poison"] },
    
    { "id": 967, "name": "Cyclizar", "type": ["dragon","normal"] },
    
    { "id": 968, "name": "Orthworm", "type": ["steel"] },
    
    { "id": 969, "name": "Glimmet", "type": ["rock","poison"] },
    
    { "id": 970, "name": "Glimmora", "type": ["rock","poison"] },
    
    { "id": 971, "name": "Greavard", "type": ["ghost"] },
    
    { "id": 972, "name": "Houndstone", "type": ["ghost"] },
    
    { "id": 973, "name": "Flamigo", "type": ["flying","fighting"] },
    
    { "id": 974, "name": "Cetoddle", "type": ["ice"] },
    
    { "id": 975, "name": "Cetitan", "type": ["ice"] },
    
    { "id": 976, "name": "Veluza", "type": ["water","psychic"] },
    
    { "id": 977, "name": "Dondozo", "type": ["water"] },
    
    { "id": 978, "name": "Tatsugiri", "type": ["dragon","water"] },
    
    { "id": 979, "name": "Annihilape", "type": ["fighting","ghost"] },
    
    { "id": 980, "name": "Clodsire", "type": ["poison","ground"] },
    
    { "id": 981, "name": "Farigiraf", "type": ["normal","psychic"] },
    
    { "id": 982, "name": "Dudunsparce", "type": ["normal"] },
    
    { "id": 983, "name": "Kingambit", "type": ["dark","steel"] },
    
    { "id": 984, "name": "Great Tusk", "type": ["ground","fighting"] },
    
    { "id": 985, "name": "Scream Tail", "type": ["fairy","psychic"] },
    
    { "id": 986, "name": "Brute Bonnet", "type": ["grass","dark"] },
    
    { "id": 987, "name": "Flutter Mane", "type": ["ghost","fairy"] },
    
    { "id": 988, "name": "Slither Wing", "type": ["bug","fighting"] },
    
    { "id": 989, "name": "Sandy Shocks", "type": ["electric","ground"] },
    
    { "id": 990, "name": "Iron Treads", "type": ["ground","steel"] },
    
    { "id": 991, "name": "Iron Bundle", "type": ["ice","water"] },
    
    { "id": 992, "name": "Iron Hands", "type": ["fighting","electric"] },
    
    { "id": 993, "name": "Iron Jugulis", "type": ["dark","flying"] },
    
    { "id": 994, "name": "Iron Moth", "type": ["fire","poison"] },
    
    { "id": 995, "name": "Iron Thorns", "type": ["rock","electric"] },
    
    { "id": 996, "name": "Frigibax", "type": ["dragon","ice"] },
    
    { "id": 997, "name": "Arctibax", "type": ["dragon","ice"] },
    
    { "id": 998, "name": "Baxcalibur", "type": ["dragon","ice"] },
    
    { "id": 999, "name": "Gimmighoul", "type": ["ghost"] },
    
    { "id": 1000, "name": "Gholdengo", "type": ["steel","ghost"] },
    
    { "id": 1001, "name": "Wo-Chien", "type": ["dark","grass"] },
    
    { "id": 1002, "name": "Chien-Pao", "type": ["dark","ice"] },
    
    { "id": 1003, "name": "Ting-Lu", "type": ["dark","ground"] },
    
    { "id": 1004, "name": "Chi-Yu", "type": ["dark","fire"] },
    
    { "id": 1005, "name": "Roaring Moon", "type": ["dragon","dark"] },
    
    { "id": 1006, "name": "Iron Valiant", "type": ["fairy","fighting"] },
    
    { "id": 1007, "name": "Koraidon", "type": ["fighting","dragon"] },
    
    { "id": 1008, "name": "Miraidon", "type": ["electric","dragon"] },
    
    { "id": 1009, "name": "Walking Wake", "type": ["water","dragon"] },
    
    { "id": 1010, "name": "Iron Leaves", "type": ["grass","psychic"] }
  ]*/
  

getAllPokemon(): PokemonInt[]{
  return this.pokemonList
}

getPokemonById(id: number): PokemonInt | undefined{
  return this.pokemonList.find(pokemonInt => pokemonInt.id === id)
}



}


