import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule } from '@angular/common/http';
import { GamesListComponent } from './pages/games-list/games-list.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { StoresListComponent } from './pages/stores-list/stores-list.component';
import { StoresPageComponent } from './pages/stores-page/stores-page.component';




@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, GamesListComponent, GamesPageComponent, StoresListComponent, StoresPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
