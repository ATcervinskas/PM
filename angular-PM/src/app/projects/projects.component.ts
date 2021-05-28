import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import {Project} from './project';
import { Router } from '@angular/router';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsList:Project
  tableBg="#f5f5f542"
  constructor(private projectsService: ProjectsService, private router:Router,private parserFormatter: NgbDateParserFormatter ) { }

  ngOnInit(): void {
    this.projectsService.viewAllProjects().subscribe(data=>{
      this.projectsList=data;
    });
  }
  deleteProject(projectId){
   this.projectsService.deleteProject(projectId).subscribe(data=>{
   });
  }
  updateProject(projecId){
     this.router.navigate(['/update-project/'+projecId])
  }
  createProject(){
    this.router.navigate(['/create-project'])
  }
  
}
