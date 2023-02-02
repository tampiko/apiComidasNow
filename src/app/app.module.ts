import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ConfirmadoComponent } from './pages/confirmado/confirmado.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ConfirmadoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
