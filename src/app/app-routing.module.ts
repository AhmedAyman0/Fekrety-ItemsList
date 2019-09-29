import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/main/home.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { RegisterComponent } from './register/register.component';
import { DeleteComponent } from './home/delete/delete.component';
import { EditComponent } from './home/edit/edit.component';


const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'items',component:ItemsListComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
