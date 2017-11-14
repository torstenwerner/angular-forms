import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Form1Component implements OnInit {

  fullform: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.fullform = this.formBuilder.group({
      firstName: 'Hildegunst'
    });
  }

  ngOnInit() {
  }

}
