import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SprintComponent } from './sprint/sprint.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SharedModule } from '../shared/shared.module';

import { ChipModule } from 'primeng/chip';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditorModule } from 'primeng/editor';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { DragDropModule } from 'primeng/dragdrop';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    SprintComponent,
    TaskDetailsComponent,
    CreateTaskComponent,
  ],
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
    DragDropModule,
  ],
})
export class DashboardModule {}
