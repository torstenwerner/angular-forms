import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormService, FormConfig } from '../form.service';

@Component({
  templateUrl: './subform.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SubformComponent implements OnInit {

  formConfig: FormConfig;

  constructor(private formService: FormService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.formService.formConfig(this.route)
      .subscribe(formConfig => this.formConfig = formConfig);
  }
}
