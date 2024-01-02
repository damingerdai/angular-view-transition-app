import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'button',
    loadChildren: () => import('./button-examples/button-examples.module').then(m => m.ButtonExamplesModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./chip-examples/chip-examples.module').then(m => m.ChipExamplesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableViewTransitions: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
