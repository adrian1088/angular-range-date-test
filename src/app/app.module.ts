import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarReceptionModule } from './pages/mar-reception/mar-reception.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Antd Componentes de internalizacion
import { NZ_I18N, es_ES, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
//import en from '@angular/common/locales/en';
registerLocaleData(es);
//registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarReceptionModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: NZ_I18N, 
      useValue: es_ES //en_US 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
