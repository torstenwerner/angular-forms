import { FormBuilder, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FormService {

  person: FormGroup;
  address: FormGroup;
  fullform: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
    this.person = this.formBuilder.group({
      firstName: 'Hildegunst'
    });
    this.address = this.formBuilder.group({
      street: 'Musterstraße'
    });
    this.fullform = this.formBuilder.group({
      person: this.person,
      address: this.address
    });
  }
}
