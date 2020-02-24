import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCallComponent } from './pages/form-call/form-call.component';


const routes: Routes = [
  {path: '', component: FormCallComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
