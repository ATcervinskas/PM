import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private projectService:ProjectsService, private router:Router) { }
projectId;
projectDetails:Project={} as Project;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.projectId=data.id;
      this.projectService.viewProject(this.projectId).subscribe(data=>{
      this.projectDetails=data;
      });
    });
  }
  updateProject(form:NgForm){
    let updateProject={
      id:form.value.id,
      projectName:form.value.project_name,
      description:form.value.project_description,
      status:form.value.project_status,
      progress:form.value.project_progress,
      startDate:form.value.project_startDate,
      endDate:form.value.project_endDate,
      peoples:form.value.project_peoples,
    };
  
    this.projectService.updateProject(this.projectId,updateProject).subscribe(data=>{
      this.router.navigate(['/']);
    });
  }

}
