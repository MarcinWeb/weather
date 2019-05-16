import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {routing} from './app-routing';
import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {WeatherModule} from './weather/weather.module';
import {AppConfigService} from './app-config.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HomeService} from './home/home.service';
const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    WeatherModule
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
