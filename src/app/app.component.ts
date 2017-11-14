import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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
