import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipExamplesComponent } from './chip-examples/chip-examples.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChipExamplesComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChipExamplesRoutingModule { }
