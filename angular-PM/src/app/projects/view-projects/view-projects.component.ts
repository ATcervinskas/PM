import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from '../tasks';
import {ProjectsService} from '../projects.service';
import { Project } from '../project';

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

  constructor(private activatedRoute:ActivatedRoute,
              private projectsServices:ProjectsService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
      this.projectId=data.id;
    });
    
    this.projectsServices.getTasks().subscribe(data=>{
      this.tasksList=data;
    });

    this.projectsServices.viewAllProjects().subscribe(data=>{
      this.projectsList=data;
     for(let i of this.projectsList){
       if(i.projectId==this.projectId){
         this.projectName=i.projectName;
       }
     }
    });
    
  
  }

  
}
