import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, enableProdMode } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HiddenDirective } from '../pages/home/counter.directive';
// import { CountoDirective }  from '../pages/home/counter.directive';

// import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';

enableProdMode();

// import { provide } from '@angular/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HiddenDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
