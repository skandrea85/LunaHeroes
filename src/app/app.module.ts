import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule}from '@angular/forms';
import {Component, Inject} from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroesDatailComponent } from './pages/heroes-datail/heroes-datail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    

    
    ListaComponent,
    

    
    HeroesComponent,
    

    
    HeroesDatailComponent
    
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
