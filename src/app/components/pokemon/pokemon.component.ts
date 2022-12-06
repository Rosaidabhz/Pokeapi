import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

constructor(){}
ngOnInit(): void {
  const container = document.getElementById("container");
  const pkmNumber = 151;
   
   const fetchPkm = async () => {
       for (let i = 1; i <= pkmNumber; i++) {
           await getPkm(i);
       }
   }
 
   const getPkm = async (id: number) => {
       const url = 
       `https://pokeapi.co/api/v2/pokemon/${id}`;
       const res = await fetch(url);
       const pokemon = await res.json();
       createPokemonCard(pokemon);
   }
 
   fetchPkm();
 
   function createPokemonCard(pokemon: { name: any; id: any; types: { type: { name: any; }; }[]; }) {
       let pokemonEl = document.createElement("div");
       pokemonEl.classList.add("pokemon");
       const pokeInnerHtml = `
       <div class="pkm-card" style="
       margin-top: 20px;
       color: black;
       border-radius: 0px 0px 8px 8px;
       font-size: 15px;
       background: #D7BCAC;
       flex: none;
       order: 2;
       align-self: stretch;
       height: 250px;
       width: 250px;
       padding: 16px;
       text-align: center;
       font-family: 'poppins';
       font-weight: 900;
       text-transform: uppercase;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       ">${pokemon.name}
       <img class="pkm-images" style="  height: 70%;
       width: 70%;" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"/>
       <div class="type" style="  font-size: 10px;
       ">Type: ${pokemon.types[0].type.name}</div>
       </div>
       `;
       pokemonEl.innerHTML = pokeInnerHtml;
       container!.appendChild(pokemonEl);
   }
 
}}