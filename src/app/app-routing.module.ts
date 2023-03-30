import { IncludeComponent } from './pages/include/include.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceComponent } from '../app/pages/choice/choice.component';
import { BrandComponent, DialogElementsDialog } from './pages/brand/brand.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
