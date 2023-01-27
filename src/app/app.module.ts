import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedCoreModule } from 'src/core/shared-core.module';

import { AppPreloadingStrategy } from './app-preloading.strategy';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
		BrowserAnimationsModule,
		HttpClientModule,
		SharedCoreModule
  ],
  providers: [AppPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
