import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';
import { App } from './app/app';

/**
 * Punto de arranque de la aplicación Angular PWA.
 * Configura el Service Worker para producción y lanza el componente raíz.
 */
bootstrapApplication(App, {
  providers: [
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),                 // Solo habilita SW en producción
      registrationStrategy: 'registerWhenStable:30000', 
      // Registra el SW cuando Angular esté estable o tras 30s
    }),
  ],
}).catch(err => console.error('❌ Error al iniciar la aplicación:', err));
