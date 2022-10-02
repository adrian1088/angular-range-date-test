import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mar/reception', 
    pathMatch: 'full',
    loadChildren: () => import('./pages/mar-reception/mar-reception.module').then(m => m.MarReceptionModule),
    data: { }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
