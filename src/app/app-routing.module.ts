import { Form2Component } from './form2/form2.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Form1Component } from './form1/form1.component';

const routes: Routes = [
  { path: '', redirectTo: '/form/0', pathMatch: 'full' },
  { path: 'form/:id', component: Form1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
