import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {ProjectsService} from '../projects.service'

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
  }
  addNewProject(form:NgForm){
    let newProject={
      projectName:form.value.project_name,
      description:form.value.project_description,
      category:form.value.project_category,
      duration:form.value.project_duration,
      startDate:form.value.project_startDate,
      endDate:form.value.project_endDate,
    };

    this.projectsService.createProject(newProject).subscribe(data=>{
      console.log(data)
    });
  }

 
}
