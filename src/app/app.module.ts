import {environment} from "./../environments/environment"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componenet imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ReposComponent } from './components/repos/repos.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';


// form and httpClient
import {FormsModule} from "@angular/forms"
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";

// firebase related
import {AngularFireAuthModule}  from "@angular/fire/auth"
import {AngularFireModule}  from "@angular/fire"

// for toastr
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {ToastrModule} from "ngx-toastr"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReposComponent,
    UserCardComponent,
    HomeComponent,
    PagenotfoundComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
