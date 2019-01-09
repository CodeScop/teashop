import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TeaService } from './services/tea.service'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeaComponent } from './tea/tea.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ShowComponent } from './show/show.component';
import { ByTypeComponent } from './by-type/by-type.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { AuthInterceptor } from './authentication/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TeaComponent,
    HomeComponent,
    NavComponent,
    ShowComponent,
    ByTypeComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    TeaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
