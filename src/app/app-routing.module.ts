import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { CrudComponent } from './views/client/crud/crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "clientes",
  component: CrudComponent
},
{
  path: "clientes/create",
  component: ClientCreateComponent
},
{
  path: "clientes/update/:id",
  component: ClientUpdateComponent
},
{
  path: "clientes/delete/:id",
  component: ClientDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
