import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {ProjectsService} from '../projects.service'
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor(private projectsService: ProjectsService, private parserFormatter: NgbDateParserFormatter) { }
  model:NgbDateStruct;

  ngOnInit(): void {
  }
  addNewProject(form:NgForm){
    let newProject={
      projectName:form.value.project_name,
      description:form.value.project_description,
      status:form.value.project_status,
      progress:form.value.project_progress,
      startDate:form.value.project_startDate,
      endDate:form.value.project_endDate,
      peoples:form.value.project_peoples,
    };
  

    this.projectsService.createProject(newProject).subscribe(data=>{
      
    });
  }

 
}
