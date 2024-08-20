import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion-cita',
  templateUrl: './confirmacion-cita.component.html',
  styleUrls: ['./confirmacion-cita.component.scss']
})
export class ConfirmacionCitaComponent {

  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }
}
