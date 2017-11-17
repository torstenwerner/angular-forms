import { SubformComponent } from './subform/subform.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormService } from './form.service';
import { AppRoutingModule } from './app-routing.module';
import { FileformComponent } from './fileform/fileform.component';


@NgModule({
  declarations: [
    AppComponent,
    SubformComponent,
    FileformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
