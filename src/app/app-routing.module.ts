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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
