import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { LoginComponent } from './login/login.component';
import { HeroesDatailComponent } from './pages/heroes-datail/heroes-datail.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

const routes: Routes = [
{path:'',component : LoginComponent},
{path:'login',component : LoginComponent},
{path:'lista',component : ListaComponent, children: [
  {
    path: '',
    component: HeroesComponent
  },
  {
    path: 'message/:id',
    component: HeroesDatailComponent
  }
]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
