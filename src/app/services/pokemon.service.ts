import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  getPokemon(limit: number, offset:number): any{
    return this.http.get('http://pokeapi.co/api/v2/pokemon/pokemon/pokemon?limit=${limit}&offset=${offset}')
  }

  getMoreData(name:string) {
    return this.http.get('http://pokeapi.co/api/v2/pokemon/pokemon/pokemon$(name)');
  }


   }   

