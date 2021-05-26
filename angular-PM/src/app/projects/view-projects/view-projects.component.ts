import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from '../tasks';
import {ProjectsService} from '../projects.service';
import { Project } from '../project';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  projectId=0;
  tasksList:Tasks;
  projectName;
  projectsList;
  projectDetails;
  taskDescription:string='';

  constructor(private activatedRoute:ActivatedRoute,
              private projectsServices:ProjectsService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
      this.projectId=data.id;

      this.projectsServices.viewProject(this.projectId).subscribe(data=>{
        this.projectDetails=data;
  
      });
    });
    
    this.projectsServices.getTasks().subscribe(data=>{
      this.tasksList=data;
    });

    this.projectsServices.viewAllProjects().subscribe(data=>{
      this.projectsList=data;
    });
    
  
  }

  addTask(formValue:NgForm){
    let newTask={
      description:formValue.value.task_description,
      project:this.projectId
    };
    
    this.projectsServices.createTask(newTask).subscribe(data=>{
      
     })
  }

  
}
