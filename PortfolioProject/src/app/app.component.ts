import { Component } from '@angular/core';
import { faGithub, faInstagram, faYoutube, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioProject';
    faGithub = faGithub;
    faLinkedin= faLinkedin;
    faEnvelope= faEnvelope;



}

