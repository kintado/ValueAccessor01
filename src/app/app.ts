import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ratingstar } from './components/cva/ratingstar/ratingstar';
import { InputToggle } from './inputtoggle/inputtoggle';
import { Goldsaintpicker } from './components/cva/goldsaintpicker/goldsaintpicker';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, Ratingstar, InputToggle, Goldsaintpicker],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {  
  protected title = 'cvaexaple01';
  myform = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    cognome: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    anni: new FormControl('', [Validators.required, Validators.min(18), Validators.max(99)]),
    rating: new FormControl(0, [Validators.required]),
    toggle: new FormControl(false, [Validators.required]),
    goldsaint: new FormControl('Mu di Ariete', [Validators.required])
  });

  setta(n : number){
    this.myform.get ('rating')?.setValue(n);
  }

  testSetta()
  {
    this.setta(3);
  }

  save() {
    if (this.myform.valid) {
      alert('Elenco valori: '+
        'Nome: ' + this.myform.get('nome')?.value + ', ' +
        'Cognome: ' + this.myform.get('cognome')?.value + ', ' +
        'Email: ' + this.myform.get('email')?.value + ', ' +
        'Anni: ' + this.myform.get('anni')?.value + ', ' +
        'Rating: ' + this.myform.get('rating')?.value +
        ', Toggle: ' + this.myform.get('toggle')?.value + ', ' +
        'Gold Saint: ' + this.myform.get('goldsaint')?.value );


    } else {
      console.log('Form is invalid');
    }
  }

}
