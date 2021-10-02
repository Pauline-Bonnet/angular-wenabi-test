import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  { path: '', redirectTo: 'volunteers', pathMatch: 'full'}, 
  { path: 'volunteers', children: [
    { path: '', component: ListComponent }, 
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
