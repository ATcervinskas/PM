import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private projectService:ProjectsService) { }
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
      category:form.value.project_category,
      duration:form.value.project_duration,
      startDate:form.value.project_startDate,
      endDate:form.value.project_endDate,
    };
    console.log(form)
    this.projectService.updateProject(this.projectId,updateProject).subscribe(data=>{
      console.log(data);
    });
  }

}
