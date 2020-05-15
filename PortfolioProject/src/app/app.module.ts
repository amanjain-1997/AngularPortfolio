import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faCodepen, faInstagram, faYoutube, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

library.add(faGithub, faCodepen, faInstagram, faYoutube, faLinkedin, faMedium);

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
