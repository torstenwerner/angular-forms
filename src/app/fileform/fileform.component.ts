import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fileform',
  templateUrl: './fileform.component.html',
  styleUrls: ['./fileform.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FileformComponent implements OnInit {

  base64 = '';
  downloadUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  onChange(fileList: FileList) {
    const reader = new FileReader();
    this.downloadUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(fileList.item(0)));
    reader.onload = event => this.base64 = btoa(reader.result);
    reader.readAsBinaryString(fileList.item(0));
  }
}
