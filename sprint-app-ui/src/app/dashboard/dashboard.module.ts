import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SprintComponent } from './sprint/sprint.component';
import { SharedModule } from '../shared/shared.module';

import { ChipModule } from 'primeng/chip';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { TaskComponent } from './task/task.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditorModule } from 'primeng/editor';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  declarations: [DashboardHomeComponent, SprintComponent, TaskComponent, CreateTaskComponent],
  imports: [
    SharedModule,
    CommonModule,
    DashboardRoutingModule,
    ChipModule,
    SplitterModule,
    CardModule,
    DynamicDialogModule,
    EditorModule,
    DropdownModule,
    DividerModule,
  ],
})
export class DashboardModule {}
