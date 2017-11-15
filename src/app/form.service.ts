import { FormBuilder, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

export class SubFormConfig {
  constructor(public formGroup: FormGroup,
    public title: string,
    public label: string,
    public formControlName) { }
}

@Injectable()
export class FormService {

  fullform: FormGroup;

  subForms: Array<SubFormConfig>;

  constructor(private formBuilder: FormBuilder) {

    const person = this.formBuilder.group({
      firstName: 'Hildegunst'
    });
    const address = this.formBuilder.group({
      street: 'Musterstraße'
    });
    this.fullform = this.formBuilder.group({
      person: person,
      address: address
    });

    this.subForms = [
      new SubFormConfig(person, 'Person Form', 'First Name', 'firstName'),
      new SubFormConfig(address, 'Address Form', 'Street', 'street')
    ];
  }
}
