import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'gold-saint-picker',
  imports: [CommonModule],
  standalone: true,
  template: `
  <div class = "container" (click)="next()">
     <img [src]="currentSaint.img" [alt]="currentSaint.name" style="width: 100px; height: 100px;">
     <h3>{{ currentSaint.name }}</h3>
  </div>
  `,
  styles: [`
  .star {
    font-size: 2rem;
    color: lightgray;
    cursor: pointer;
  }
  .star.filled {
    color: gold;
  }
  `],
  
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Goldsaintpicker,
      multi: true
    }
  ]
})
export class Goldsaintpicker implements ControlValueAccessor {
    index = 0;
    saints = [
    { name: 'Mu di Ariete', img: 'https://www.icavalieridellozodiaco.net/personaggi/analisi/mur01.png' },
    { name: 'Aldebaran di Toro', img: 'https://www.icavalieridellozodiaco.net/personaggi/analisi/toro01.png' },
    { name: 'Saga di Gemelli', img: 'https://www.icavalieridellozodiaco.net/personaggi/analisi/gem01.png' },
    { name: 'Deathmask di Cancro', img: 'https://static.wikia.nocookie.net/saintseiya/images/0/0f/Death_Mask_cancer.png' },
    { name: 'Aiolia di Leone', img: 'https://www.cavalieridellozodiaco.com/CDZ_L_LEO.png' },
    { name: 'Shaka di Vergine', img: 'https://www.cavalieridellozodiaco.com/CDZ_S_SHAKAVIRGO.png' },
    { name: 'Dohko di Bilancia', img: 'https://www.cavalieridellozodiaco.com/CDZ_L_LIBRA.png' },
    { name: 'Milo di Scorpione', img: 'https://www.cavalieridellozodiaco.com/CDZ_S_SCORPIO.png' },
    { name: 'Aiolos di Sagittario', img: 'https://www.cavalieridellozodiaco.com/CDZ_S_SAGITTA.png' },
    { name: 'Shura di Capricorno', img: 'https://www.cavalieridellozodiaco.com/CDZ_C_CAPRICORNOSHURA.png' },
    { name: 'Camus di Acquario', img: 'https://www.cavalieridellozodiaco.com/CDZ_C_CAMUSACQUARIO.png' },
    { name: 'Afrodite di Pesci', img: 'https://www.cavalieridellozodiaco.com/CDZ_P_PISCES.png' }
      
    ]
  

    private onChange: (value: string) => void = () => {};
    private onTouched: () => void = () => {};


    get currentSaint() {
      return this.saints[this.index];
    }

    next(){
      this.index = (this.index + 1) % this.saints.length; // Loop back to the first saint
      this.onChange(this.currentSaint.name); // Notify the change with the saint's name
      this.onTouched();

    }

    writeValue(nomeSaint: string): void {
      this.index = this.saints.findIndex(saint => saint.name === nomeSaint);
      if (this.index === -1) {
        this.index = 0; // Default to the first saint if not found
      }
      
    }

    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }

 
}

