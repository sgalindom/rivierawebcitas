import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones-ortopedia',
  templateUrl: './opciones-ortopedia.component.html',
  styleUrls: ['./opciones-ortopedia.component.scss']
})
export class OpcionesOrtopediaComponent {
  
  constructor(private router: Router) {}

  // Define la función selectOption
  selectOption(option: string) {
    console.log('Opción seleccionada:', option);
    
    // Puedes usar esta función para navegar a otra página o realizar cualquier lógica adicional
    if (option === 'ConsultaSOAT') {
      // Lógica para la opción 'ConsultaSOAT'
      this.router.navigate(['/detalles-paciente']);
    } else {
      // Lógica para otras opciones
    }
  }
}
