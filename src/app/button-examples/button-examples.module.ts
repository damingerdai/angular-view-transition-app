import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonExamplesComponent } from './button-examples.component';
import { ButtonExamplesRoutingModule } from './button-examples-routing.module';
import { SharedMaterialModule } from '../shared.material.module';


@NgModule({
  declarations: [
    ButtonExamplesComponent
  ],
  imports: [
    CommonModule,
    ButtonExamplesRoutingModule,
    SharedMaterialModule,
  ]
})
export class ButtonExamplesModule { }
