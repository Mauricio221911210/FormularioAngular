import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { MateriasComponent } from './components/materias/materias.component';
import { MateriaComponent } from './components/materia/materia.component';
import { MateriasService } from './services/materias.service';
import { NuevoUsuaropComponent } from './components/nuevo-usuarop/nuevo-usuarop.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './services/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DirectivasComponent,
    MateriasComponent,
    MateriaComponent,
    NuevoUsuaropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MateriasService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
