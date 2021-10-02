import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolunteersComponent } from './components/volunteers/volunteers.component';


const routes: Routes = [
  { path: '', redirectTo: 'volunteers', pathMatch: 'full'}, 
  { path: 'volunteers', children: [
    { path: '', component: VolunteersComponent }, 
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
