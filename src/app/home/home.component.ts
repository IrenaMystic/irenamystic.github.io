import { Component, OnInit } from '@angular/core';

import { ProjectService, Project } from '../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projects: Project[];

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.projects;
  }

}
