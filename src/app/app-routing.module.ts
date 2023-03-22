import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceComponent } from '../app/pages/choice/choice.component';
import { BrandComponent } from './pages/brand/brand.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/choice',
    pathMatch: 'full',
  },
  {
    path: 'choice',
    component: ChoiceComponent,
  },
  {
    path: 'brand',
    component: BrandComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
