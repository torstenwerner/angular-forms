import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { FormService } from './form.service';

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

  constructor(private formService: FormService) {

    this.person = this.formService.person;
    this.address = this.formService.address;
    this.fullform = this.formService.fullform;
  }
}
