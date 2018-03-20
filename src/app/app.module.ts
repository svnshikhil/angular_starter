import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
// Main module
import { AppComponent } from './app.component';
// Components

import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { MyNewPipePipe } from './pipes/my-new-pipe.pipe';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';

// Services
import { LoginService } from "./services/login.service";
import { SignupComponent } from './components/signup/signup.component';
import { FullComponent } from './containers/full/full.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyNewPipePipe,
    HomeComponent,
    SettingsComponent,
    SignupComponent,
    FullComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
