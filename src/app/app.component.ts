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

  fullform: FormGroup;

  constructor(private formService: FormService) {
    this.fullform = this.formService.fullform;
  }
}
