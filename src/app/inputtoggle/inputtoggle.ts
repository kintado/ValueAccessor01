import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



@Component({
  selector: 'inputtoggle',
  imports: [CommonModule],
  standalone: true,
  template: `
  <div (click)="toggle()" class="toggle" [class.on]="val">
            {{ val ? 'ON' : 'OFF' }}
  </div>
  `,
  styles: [`
  .toggle { cursor: pointer; padding: 1rem; background-color: lightgray; border-radius: 0.5rem; display: inline-block; }
  .toggle.on { background-color: green; color: white; }
  `],
  
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputToggle,
      multi: true
    }
  ]
})
export class InputToggle implements ControlValueAccessor {
    val =false;


    private onChange: (value: number) => void = () => {};
    private onTouched: () => void = () => {};

   toggle(): void {
        this.val = !this.val;
        this.onChange(this.val ? 1 : 0); // Assuming 1 for true and 0 for false
        this.onTouched();
        }

    writeValue(v: boolean): void {
      this.val = v;

    }

    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }

 
}

