import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@Component({
  selector: 'app-captura-cedula',
  standalone: true,
  imports: [FormsModule],  // Agrega FormsModule aquí
  templateUrl: './captura-cedula.component.html',
  styleUrls: ['./captura-cedula.component.scss']  // Asegúrate de que esto esté bien escrito
})
export class CapturaCedulaComponent {
  tipoIden: string = '';
  numeroIden: string = '';

  constructor(private router: Router) { }

  consultarPaciente() {
    this.router.navigate(['/opciones-ortopedia']);  // Navega al componente OpcionesOrtopedia
  }
}
