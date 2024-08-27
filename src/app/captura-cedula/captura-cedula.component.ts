import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-captura-cedula',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './captura-cedula.component.html',
  styleUrls: ['./captura-cedula.component.scss']
})
export class CapturaCedulaComponent implements OnInit {
  capturaCedulaForm: FormGroup;
  loading = false;
  errorMessage = '';
  paciente: any;
  showModal = false;

  isLabelAnimated = false;

  private apiUrl = 'http://26.49.204.131:8095/api/paciente/consultarPaciente';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiYXV0aG9yaXplZCI6dHJ1ZSwiZGVwZW5kZW5jaWEiOjAsIm5vbWJyZUJhc2UiOiIiLCJub21icmVEZXBlbmRlbmNpYSI6IiIsIm5vbWJyZVN1Y3Vyc2FsIjoiIiwibm9tYnJlVXN1YXJpbyI6IkNFTlRSTyBNRURJQ08gUVVJUlVSR0lDTyBMQSBSSVZJRVJBIFMuQS5TIiwic3VjdXJzYWwiOjAsInVzdWFyaW8iOjB9.nOvByNtzeKUWXdluG_td_p8mTVD8UttwbdNWxR6Epsw';

  constructor(private http: HttpClient, private router: Router) {
    this.capturaCedulaForm = new FormGroup({
      tipoIden: new FormControl('', Validators.required),
      numeroIden: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  triggerLabelAnimation() {
    this.isLabelAnimated = true;
  }

  consultarPaciente() {
    if (this.capturaCedulaForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      const { tipoIden, numeroIden } = this.capturaCedulaForm.value;

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      });

      this.http.post(this.apiUrl, { tipoIden, numeroIden }, { headers }).subscribe({
        next: (response: any) => {
          if (response.listaDetallePaciente && response.listaDetallePaciente.length > 0) {
            this.paciente = response.listaDetallePaciente[0];
            this.showModal = true;
          } else {
            this.errorMessage = 'Usuario no registrado. Por favor, registre su información.';
            this.router.navigate(['/registro-user']);
          }
          this.loading = false;
        },
        error: (error: any) => {
          this.errorMessage = 'Ocurrió un error al consultar el paciente.';
          this.loading = false;
        }
      });
    }
  }

  confirmarInformacion() {
    this.router.navigate(['/opciones-ortopedia']);
  }

  closeModal() {
    this.showModal = false;
  }
}
