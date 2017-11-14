import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Form1Component implements OnInit {

  formGroup: FormGroup;

  constructor(private formService: FormService) {
    this.formGroup = this.formService.person;
  }

  ngOnInit() {
  }

}
