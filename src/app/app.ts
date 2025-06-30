import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ratingstar } from './components/cva/ratingstar/ratingstar';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, Ratingstar],
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
    rating: new FormControl(0, [Validators.required])
  });

  setta(n : number){
    this.myform.get ('rating')?.setValue(n);
  }

  testSetta()
  {
    this.setta(3);
  }

}
