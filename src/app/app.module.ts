import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { WINDOW } from './window.token';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // @angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // layout
    HeaderModule,

    // routing
    AppRoutingModule,
  ],
  providers: [
    {
      provide: WINDOW,
      useValue: window
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
