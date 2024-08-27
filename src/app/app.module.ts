import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Correct import statement
import { AppComponent } from './app.component';
import { CapturaCedulaComponent } from './captura-cedula/captura-cedula.component';
import { OpcionesOrtopediaComponent } from './opciones-ortopedia/opciones-ortopedia.component';
import { DetallesPacienteComponent } from './detalles-paciente/detalles-paciente.component';
import { ConfirmacionCitaComponent } from './confirmacion-cita/confirmacion-cita.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CapturaCedulaComponent,
    OpcionesOrtopediaComponent,
    DetallesPacienteComponent,
    ConfirmacionCitaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes), // Assuming appRoutes is correctly defined
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
