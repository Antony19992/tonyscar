import { IncludeComponent } from './pages/include/include.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceComponent } from '../app/pages/choice/choice.component';
import { BrandComponent } from './pages/brand/brand.component';
import { EditComponent } from './pages/edit/edit.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
