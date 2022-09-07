import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { SearchComponent } from './components/search/search.component';
import { ShowstudentComponent } from './components/showstudent/showstudent.component';

const routes: Routes = [
  { path: 'addstudent', component: AddstudentComponent },
  { path: 'showstudent', component: ShowstudentComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'search', component: SearchComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
