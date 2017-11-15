import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

export class SubFormConfig {
  constructor(public formGroup: FormGroup,
    public title: string,
    public formControl: FormControl,
    public label: string) { }
}

@Injectable()
export class FormService {

  fullform: FormGroup;

  subForms: Array<SubFormConfig>;

  constructor() {

    const firstName = new FormControl('Hildegunst');
    const person = new FormGroup({ firstName: firstName });

    const street = new FormControl('Musterstraße');
    const address = new FormGroup({ street: street });

    this.fullform = new FormGroup({
      person: person,
      address: address
    });

    this.subForms = [
      new SubFormConfig(person, 'Person Form', firstName, 'First Name'),
      new SubFormConfig(address, 'Address Form', street, 'Street')
    ];
  }
}
