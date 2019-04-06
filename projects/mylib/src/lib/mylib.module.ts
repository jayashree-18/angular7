import { NgModule } from '@angular/core';
import { MylibComponent } from './mylib.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MylibComponent],
  imports: [
    CommonModule
  ],
  exports: [MylibComponent]
})
export class MylibModule { }
