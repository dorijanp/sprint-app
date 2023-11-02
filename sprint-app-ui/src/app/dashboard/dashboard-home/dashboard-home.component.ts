import { Component } from '@angular/core';
import { SprintService } from '../sprint.service';
import { Sprint } from 'src/app/shared/models/sprint';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css'],
})
export class DashboardHomeComponent {
  constructor(private sprintService: SprintService) {}

  sprints$ = this.sprintService.getSprints();

  selectedSprint: Sprint | undefined;

  getSprintDetails(sprint: Sprint) {
    this.sprintService
      .getSprint(sprint.id)
      .subscribe((res: Sprint) => (this.selectedSprint = res));
  }
}
