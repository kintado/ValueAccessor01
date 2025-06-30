import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'pokemons-picker',
  imports: [CommonModule],
  standalone: true,
  template: `
 <div class="pokemon-grid">
   <div class="pokemon-card" *ngFor="let pokemon of pokemons" (click)="selectPokemon(pokemon)">
     <img [src]="pokemon.img" [alt]="pokemon.name" [class.selected]="pokemon.name === selected" />
     <h3>{{ pokemon.name }}</h3>
   </div>
 </div>
  `,
  styles: [`
  .pokemon-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  img {
    max-width: 80px;
    max-height: 80px;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  img.selected {
    transform: scale(1.1);
    border: 2px solid blue;    
  }
  `],
  
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PokemonsPicker,
      multi: true
    }
  ]
})
export class PokemonsPicker implements ControlValueAccessor {
    
    pokemons = [
    { name: 'Pikachu', img: 'https://img.pokemondb.net/sprites/home/normal/pikachu.png' },
    { name: 'Charmander', img: 'https://img.pokemondb.net/sprites/home/normal/charmander.png' },
    { name: 'Squirtle', img: 'https://img.pokemondb.net/sprites/home/normal/squirtle.png' },
    { name: 'Bulbasaur', img: 'https://img.pokemondb.net/sprites/home/normal/bulbasaur.png' },
    { name: 'Jigglypuff', img: 'https://img.pokemondb.net/sprites/home/normal/jigglypuff.png' },
    { name: 'Meowth', img: 'https://img.pokemondb.net/sprites/home/normal/meowth.png' },
    { name: 'Psyduck', img: 'https://img.pokemondb.net/sprites/home/normal/psyduck.png' }
  ]
  

    private onChange: (value: string) => void = () => {};
    private onTouched: () => void = () => {};
    selected: string = '';

    get currentPokemon() {
      return this.selected;
    }



    selectPokemon(pokemon: { name: string, img: string }): void {
      
      this.selected = pokemon.name;
      this.onChange(this.selected);
      this.onTouched();
    }

    writeValue(nomePokemon: string): void {
      this.selected = nomePokemon;
    }


    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }

 
}

