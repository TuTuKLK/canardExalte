import { BadComponent } from './componentsShop/bad/bad.component';
import { GoodComponent } from './componentsShop/good/good.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'good', pathMatch:'full'},
  {path: 'good', component: GoodComponent},
  {path: 'bad', component: BadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
