import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { ShowstudentComponent } from './components/showstudent/showstudent.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/homepage/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    AddstudentComponent,
    ShowstudentComponent,
    AboutusComponent,
    SearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
