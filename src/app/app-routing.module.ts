import { FileformComponent } from './fileform/fileform.component';
import { SubformComponent } from './subform/subform.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/form/0', pathMatch: 'full' },
  { path: 'form/:id', component: SubformComponent },
  { path: 'fileform', component: FileformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
