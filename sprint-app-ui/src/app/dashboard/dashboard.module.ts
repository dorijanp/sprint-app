import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SprintComponent } from './sprint/sprint.component';

import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [DashboardHomeComponent, SprintComponent],
  imports: [CommonModule, DashboardRoutingModule, ChipModule],
})
export class DashboardModule {}
