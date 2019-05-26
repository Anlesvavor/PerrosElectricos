import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { GatosComponent } from './components/gatos/gatos.component';
import { PerrosComponent } from './components/perros/perros.component';
import { LoginComponent } from './components/login/login.component';
import { AgregarPerroComponent } from './components/agregar-perro/agregar-perro.component';
import { AgregarGatoComponent } from './components/agregar-gato/agregar-gato.component';

@NgModule({
  declarations: [
    AppComponent,
    GatosComponent,
    PerrosComponent,
    LoginComponent,
    AgregarPerroComponent,
    AgregarGatoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
