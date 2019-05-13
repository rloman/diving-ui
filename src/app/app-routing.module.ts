import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuitListComponent } from './components/suit-list/suit-list.component';
import { SuitShowComponent } from './components/suit-show/suit-show.component';

const routes: Routes = [
  {
    path: 'suits',
    component: SuitListComponent
  },
  {
    path: '',
    component: SuitListComponent,
    pathMatch: 'full',
  },
  {
    path: 'suits/:id',
    component: SuitShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
