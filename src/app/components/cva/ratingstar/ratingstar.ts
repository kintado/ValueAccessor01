import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'inputrating',
  imports: [CommonModule],
  standalone: true,
  template: `
  &nbsp;
  <span *ngFor="let i of [0, 0, 0, 0, 0]; let index = index" class="star" [class.filled]="index < value" (click)="rate(index + 1)" >★</span>
  &nbsp;
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
      useExisting: Ratingstar,
      multi: true
    }
  ]
})
export class Ratingstar implements ControlValueAccessor {
    value = 0;


    private onChange: (value: number) => void = () => {};
    private onTouched: () => void = () => {};

    rate(number: number): void {
      this.value = number;
      this.onChange(number);
      this.onTouched();

    }

    writeValue(v: number): void {
      this.value = v
      
    }

    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }

 
}

