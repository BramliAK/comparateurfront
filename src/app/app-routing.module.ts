import { IndexComponent } from './component/index/index.component';
import { ListComponent } from './component/list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Smartphone', component: ListComponent },
  { path: 'PC', component: ListComponent },
  { path: '', component: IndexComponent }
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
