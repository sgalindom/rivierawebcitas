// src/app/captura-cedula/captura-cedula.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-captura-cedula',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './captura-cedula.component.html',
  styleUrls: ['./captura-cedula.component.scss']
})
export class CapturaCedulaComponent {
  tipoIden: string = '';
  numeroIden: string = '';
  nombre: string = '';
  sexo: string = '';
  direccion: string = '';
  ciudad: string = '';
  telefono: string = '';
  email: string = '';
  nombreEmpresa: string = '';
  isLabelAnimated: boolean = false;

  constructor(private router: Router) { }

  triggerLabelAnimation() {
    this.isLabelAnimated = true;
  }

  consultarPaciente() {
    this.router.navigate(['/opciones-ortopedia']);  // Navega al componente OpcionesOrtopedia
  }
}
