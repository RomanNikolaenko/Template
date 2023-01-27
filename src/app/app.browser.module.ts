import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppPreloadingStrategy } from './app-preloading.strategy';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { routes } from './app.routes';

@NgModule({
	imports: [
		AppModule,
		RouterModule.forRoot(routes, {
			preloadingStrategy: AppPreloadingStrategy,
			scrollPositionRestoration: 'enabled',
			initialNavigation: 'enabledBlocking'
		})
	],
	exports: [RouterModule],
	bootstrap: [AppComponent]
})
export class AppBrowserModule {}
