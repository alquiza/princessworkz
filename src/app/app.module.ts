import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MainComponent } from './main/main/main.component';
import { BodyMainComponent } from './components/body-main/body-main.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { CardRegisterComponent } from './components/card-register/card-register.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { FooterComponent } from './main/footer/footer.component';
import { AboutComponent } from './main/about/about.component';
import { RegisterComponent } from './main/register/register.component';
import { LoginComponent } from './main/login/login.component';
import { ContactComponent } from './main/contact/contact.component';
import { CardContactComponent } from './components/card-contact/card-contact.component';
import { MemberComponent } from './main/member/member.component';
import { Card000Component } from './videos/card000/card000.component';
import { Card001Component } from './videos/card001/card001.component';
import { Card002Component } from './videos/card002/card002.component';
import { Card003Component } from './videos/card003/card003.component';
import { Card004Component } from './videos/card004/card004.component';
import { Card005Component } from './videos/card005/card005.component';
import { Card006Component } from './videos/card006/card006.component';
import { Card007Component } from './videos/card007/card007.component';
import { AuthInterceptor } from './services/auth/authconfig.interceptors';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BodyMainComponent,
    CardLoginComponent,
    CardRegisterComponent,
    HeaderMainComponent,
    FooterComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    CardContactComponent,
    MemberComponent,
    Card000Component,
    ContactComponent,
    Card001Component,
    Card002Component,
    Card003Component,
    Card004Component,
    Card005Component,
    Card006Component,
    Card007Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
