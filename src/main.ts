import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppBrowserModule } from './app/app.browser.module';
import { environment } from './environments/environment';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).global = window;

if (environment.production) {
	enableProdMode();
}

function bootstrap() {
	platformBrowserDynamic().bootstrapModule(AppBrowserModule)
		.catch(err => console.log(err));
}

if (document.readyState === 'complete') {
		bootstrap();
} else {
		document.addEventListener('DOMContentLoaded', bootstrap);
}
