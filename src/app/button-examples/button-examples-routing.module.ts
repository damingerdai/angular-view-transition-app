import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonExamplesComponent } from './button-examples.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ButtonExamplesComponent
  }
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ButtonExamplesRoutingModule { }
