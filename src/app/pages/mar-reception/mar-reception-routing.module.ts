import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarReceptionComponent } from './mar-reception.component';

const routes: Routes = [
  {
    path:'',
    component: MarReceptionComponent,
    data:{
      headerDisplay: 'none'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarReceptionRoutingModule { }
