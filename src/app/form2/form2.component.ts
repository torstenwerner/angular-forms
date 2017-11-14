import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Form2Component implements OnInit {

  formGroup: FormGroup;

  constructor(private formService: FormService) {
    this.formGroup = this.formService.address;
  }

  ngOnInit() {
  }

}
