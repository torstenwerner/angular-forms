import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormService, FormConfig } from '../form.service';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './subform.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SubformComponent implements OnInit {

  formConfig: FormConfig;

  constructor(private formService: FormService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id$: Observable<number> = this.route.paramMap
      .map(paramMap => +paramMap.get('id'));
    this.formService.formConfig(id$)
      .subscribe(formConfig => this.formConfig = formConfig);
  }
}
