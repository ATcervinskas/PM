import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import {Project} from './project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsList:Project;
  constructor(private projectsService: ProjectsService, private router:Router) { }

  ngOnInit(): void {
    this.projectsService.viewAllProjects().subscribe(data=>{
      this.projectsList=data;
    });
  }

  createProject(){
    this.router.navigate(['/projects/create-project'])
  }
}
