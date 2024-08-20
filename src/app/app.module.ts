import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CapturaCedulaComponent } from './captura-cedula/captura-cedula.component';
import { OpcionesOrtopediaComponent } from './opciones-ortopedia/opciones-ortopedia.component';
import { DetallesPacienteComponent } from './detalles-paciente/detalles-paciente.component';
import { ConfirmacionCitaComponent } from './confirmacion-cita/confirmacion-cita.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    OpcionesOrtopediaComponent,
    DetallesPacienteComponent,
    ConfirmacionCitaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CapturaCedulaComponent // Asegúrate de importar el componente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
