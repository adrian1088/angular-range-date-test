import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mar/reception', 
    pathMatch: 'full',
    loadChildren: () => import('./pages/mar-reception/mar-reception.module').then(m => m.MarReceptionModule),
    data: { }
  },
  {
    path: 'user', 
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
    data: { }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
