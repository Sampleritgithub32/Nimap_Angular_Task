import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component' 
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CommonService } from './common.service';
import { SharedService } from './shared.service';




// Extend the ActivatedRouteSnapshot interface to include the state property
declare module '@angular/router' {
  interface ActivatedRouteSnapshot {
    state: any;
  }
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    UserProfileComponent,
    HeaderComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
      
  
   
    
  ],
  providers: [CommonService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
