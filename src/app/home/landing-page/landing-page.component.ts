import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  pageTitle: any;
  constructor(private titleService: Title) {
    this.pageTitle = 'Kenryan Luke';
    this.titleService.setTitle(this.pageTitle);
  }
}
