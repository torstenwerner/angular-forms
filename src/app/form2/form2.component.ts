import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormService, SubFormConfig } from '../form.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Form2Component implements OnInit {

  id = 1;
  formConfig: SubFormConfig;

  constructor(private formService: FormService) {
    this.formConfig = this.formService.subForms[this.id];
  }

  ngOnInit() {
  }

}
