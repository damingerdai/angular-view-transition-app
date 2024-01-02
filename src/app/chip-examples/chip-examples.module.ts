import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipExamplesComponent } from './chip-examples/chip-examples.component';
import { SharedMaterialModule } from '../shared.material.module';
import { ChipExamplesRoutingModule } from './chip-examples-routing.module';



@NgModule({
  declarations: [
    ChipExamplesComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    ChipExamplesRoutingModule,
  ]
})
export class ChipExamplesModule { }
