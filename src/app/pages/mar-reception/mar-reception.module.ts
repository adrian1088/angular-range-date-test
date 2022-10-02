import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MarReceptionRoutingModule } from './mar-reception-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { MarReceptionComponent } from './mar-reception.component';



@NgModule({
  declarations: [
    MarReceptionComponent
  ],
  imports: [
    CommonModule,
    MarReceptionRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MarReceptionModule { }
