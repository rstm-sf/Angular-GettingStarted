import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getBaseUrl() {
  var baseUrl = document.getElementsByTagName('base')[0].href

  // If using Stackblitz, replace the url with this line
  // because Stackblitz can't find the api folder.
  return baseUrl === 'http://localhost:4200/' ? 'api/' : baseUrl;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
