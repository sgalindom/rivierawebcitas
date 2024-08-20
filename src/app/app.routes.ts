import { Routes } from '@angular/router';

import { MainPanelComponent } from './main-panel/main-panel.component';
import { CapturaCedulaComponent } from './captura-cedula/captura-cedula.component';
import { OpcionesOrtopediaComponent } from './opciones-ortopedia/opciones-ortopedia.component';
import { DetallesPacienteComponent } from './detalles-paciente/detalles-paciente.component';
import { ConfirmacionCitaComponent } from './confirmacion-cita/confirmacion-cita.component';

export const appRoutes: Routes = [
  { path: '', component: MainPanelComponent },
  { path: 'captura-cedula', component: CapturaCedulaComponent },
  { path: 'opciones-ortopedia', component: OpcionesOrtopediaComponent },
  { path: 'detalles-paciente', component: DetallesPacienteComponent },
  { path: 'confirmacion-cita', component: ConfirmacionCitaComponent },
];
