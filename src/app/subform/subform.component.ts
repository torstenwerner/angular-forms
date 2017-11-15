import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormService, SubFormConfig } from '../form.service';

@Component({
  templateUrl: './subform.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SubformComponent implements OnInit {

  formConfig: SubFormConfig;

  constructor(private formService: FormService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.formConfig = this.formService.subForms[id];
    });
  }

}
