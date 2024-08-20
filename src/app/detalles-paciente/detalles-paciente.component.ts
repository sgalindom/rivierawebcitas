import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-paciente',
  templateUrl: './detalles-paciente.component.html',
  styleUrls: ['./detalles-paciente.component.scss']
})
export class DetallesPacienteComponent {

  constructor(private router: Router) {}

  confirmarCita(): void {
    this.router.navigate(['/confirmacion-cita']);
  }
}
