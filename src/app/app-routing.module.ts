import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuitListComponent } from './components/suit-list/suit-list.component';

const routes: Routes = [
  {
    path: 'suits',
    component: SuitListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
