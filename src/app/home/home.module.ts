import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ContactModule } from '../contact/contact.module';
import { AboutModule } from '../about/about.module';
import { ProjectsModule } from '../projects/projects.module';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzLayoutModule,
    NzIconModule,
    ContactModule,
    AboutModule,
    ProjectsModule,
    NzGridModule,
  ],
})
export class HomeModule {}
