import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  name: string

  constructor(private pokemonService : PokemonService){ }
  ngOnInit(): void {
  }
  
  search(){
    this.pokemonService.getPokemon(this.name)
  }


}
