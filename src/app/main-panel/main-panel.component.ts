import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent {
  constructor(private router: Router) {}

  // Método para redirigir al hacer clic en el logo
  redirectLogo(): void {
    window.location.href = 'https://clinicalariviera.com'; // URL 
  }

  // Método para manejar la selección de servicio 
  selectService(service: string): void {
    if (service === 'Ortopedia') {
      this.router.navigate(['/captura-cedula']);
    }
    
  }
}
