import { IncludeComponent } from './pages/include/include.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceComponent } from '../app/pages/choice/choice.component';
import { BrandComponent } from './pages/brand/brand.component';
import { EditComponent } from './pages/edit/edit.component';
import { ClientComponent } from './pages/client/client.component';
import { SalesComponent } from './pages/sales/sales.component';
import { StockComponent } from './pages/stock/stock.component';
import { VeichleComponent } from './pages/veichle/veichle.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/choice',
    pathMatch: 'full',
  },
  {
    path: 'choice',
    component: ChoiceComponent
  },
  {
    path: 'brand',
    component: BrandComponent
  },
  {
    path: 'include/:id',
    component: IncludeComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: 'veichle',
    component: VeichleComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
