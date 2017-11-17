import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fileform',
  templateUrl: './fileform.component.html',
  styleUrls: ['./fileform.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FileformComponent implements OnInit {

  base64 = '';

  constructor() { }

  ngOnInit() {
  }

  onChange(data: FileList) {
    const reader = new FileReader();
    reader.onload = event => this.base64 = btoa(reader.result);
    reader.readAsBinaryString(data.item(0));
  }
}
