import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from '../tasks';
import {ProjectsService} from '../projects.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  projectId:number;
  tasksList:Tasks;
  projectName;
  projectsList;
  projectDetails;
  taskDescription:string='';
  colors={
    green:"#d1e7dd",
    red:"#f8d7da",
    yellow:"#fff3cd",
    blue:"#cff4fc",
    grey:"#d6d8db"
  };
  page = 1;
  count = 0;
  tableSize = 6;
  tableSizes = [3, 6, 9, 12];
  constructor(private activatedRoute:ActivatedRoute,
              private projectsServices:ProjectsService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.projectId=data.id;
      this.projectsServices.viewProject(this.projectId).subscribe(data=>{
        this.projectDetails=data;
      });
    });
    this.projectsServices.getTasks(this.projectId).subscribe(data=>{
      this.tasksList=data;
    });
    this.projectsServices.viewAllProjects().subscribe(data=>{
      this.projectsList=data;
    });
  }
  addTask(formValue:NgForm){
    let newTask={
      description:formValue.value.task_description,
      project:this.projectId,
      color:"white"
    };
    if(typeof newTask.description!='undefined'&& newTask.description) {
      this.projectsServices.createTask(newTask).subscribe(data=>{
      })
    }else{
      return
    }
  }
  deleteTask(taskId){
    this.projectsServices.deleteTask(taskId).subscribe(data=>{

    })
  }
  onTableDataChange(event){
    this.page = event;
    this.projectsServices.getTasks(this.projectId).subscribe(data=>{
      this.tasksList=data;
    });
  }
  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.projectsServices.getTasks(this.projectId).subscribe(data=>{
      this.tasksList=data;
    });
  }
  changeTaskcolor(taskId,c,d){
    let taskcolor={
      id:taskId,
      project: this.projectId,
      description:d,
      color:c
    }
    this.projectsServices.updateTask(taskId,taskcolor).subscribe(data=>{
      console.log(data);
    });
  }

}
