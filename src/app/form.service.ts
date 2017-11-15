import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

export class SubFormConfig {
  constructor(
    public formGroup: FormGroup,
    public title: string,
    public formControl: FormControl,
    public label: string) { }
}

@Injectable()
export class FormService {

  fullform: FormGroup;

  private subForms: Array<SubFormConfig>;

  constructor() {

    const firstName = new FormControl('Hildegunst');
    const person = new FormGroup({ firstName });

    const street = new FormControl('Musterstraße');
    const address = new FormGroup({ street });

    this.fullform = new FormGroup({ person, address });

    this.subForms = [
      new SubFormConfig(person, 'Person Form', firstName, 'First Name'),
      new SubFormConfig(address, 'Address Form', street, 'Street')
    ];
  }

  formConfig(route: ActivatedRoute): Observable<SubFormConfig> {
    return route.paramMap.map(paramMap => this.subForms[+paramMap.get('id')]);
  }
}
