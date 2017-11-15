import { Form2Component } from './form2/form2.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Form1Component } from './form1/form1.component';

const routes: Routes = [
  { path: '', redirectTo: '/form1', pathMatch: 'full' },
  { path: 'form1', component: Form1Component },
  { path: 'form2', component: Form2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
