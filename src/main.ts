import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  if (window) {
    window.console.log(`
    ___       __   ___  ________
    |\  \     |\  \|\  \|\   __  \
    \ \  \    \ \  \ \  \ \  \|\  \
     \ \  \  __\ \  \ \  \ \   ____\
      \ \  \|\__\_\  \ \  \ \  \___|
       \ \____________\ \__\ \__\
        \|____________|\|__|\|__|

   `);
    (window.console.log = function (..._: unknown[]) {}),
      (window.console.warn = function (..._: unknown[]) {}),
      (window.console.error = function (..._: unknown[]) {}),
      (window.console.time = function (..._: unknown[]) {}),
      (window.console.timeEnd = function (..._: unknown[]) {});
  }
}
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
