import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { MainPageModule } from './modules/main-page/main-page.module';
import { LoginModule } from './modules/login/login.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppAuthInterceptor } from './shared/interceptors/auth.interceptor';
import {AuthService} from './shared/services/auth.service';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {AuthGuard} from './shared/services/auth-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MainPageModule,
    LoginModule,
    AppRoutes
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AppAuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
