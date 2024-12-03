import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Importando os módulos do Firebase
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from "../environments/environment";
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
declarations: [AppComponent],
imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
AngularFireModule.initializeApp(environment.firebaseConfig),GoogleMapsModule,
AngularFireAuthModule,FormsModule, HttpClientModule ],
providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
bootstrap: [AppComponent],
})
export class AppModule {}