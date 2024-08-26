// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';

// Bootstrap the standalone AppComponent with routing
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    // Agrega otros proveedores aquí si es necesario
  ]
})
  .catch(err => console.error(err));
