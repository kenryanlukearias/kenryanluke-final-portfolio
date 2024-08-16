import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SharedRoutingModule, NzMenuModule, NzIconModule],
  exports: [NzIconModule]
})
export class SharedModule {}
