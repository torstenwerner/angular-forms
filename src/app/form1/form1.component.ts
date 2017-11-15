import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormService, SubFormConfig } from '../form.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Form1Component implements OnInit {

  id = 0;
  formConfig: SubFormConfig;

  constructor(private formService: FormService) {
    this.formConfig = this.formService.subForms[this.id];
  }

  ngOnInit() {
  }

}
