import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PommeComponent } from './pomme/pomme.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'pomme', component: PommeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
