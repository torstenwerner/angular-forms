import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  fullform: FormGroup;
  person: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.person = this.formBuilder.group({
      firstName: 'Hildegunst'
    });
    this.fullform = this.formBuilder.group({
      person: this.person
    });
    console.log(this.fullform.value.person);
  }
}
