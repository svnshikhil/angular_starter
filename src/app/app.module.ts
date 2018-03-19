import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { MyNewPipePipe } from './pipes/my-new-pipe.pipe';
import { HomeComponent } from './components/home/home.component';


import { LoginServiceService } from './services/login-service.service';
import { UserServiceService } from './services/user-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyNewPipePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    LoginServiceService,
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
