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
  tableBg="#f5f5f542"
  searchProjectName:Project[]=[];
  projectName:any;
  page = 1;
  count = 0;
  tableSize = 6;
  tableSizes = [3, 6, 9, 12];
  constructor(private projectsService: ProjectsService, private router:Router ) { }

  ngOnInit(): void {
    this.projectsService.search().subscribe(data=>{
      this.searchProjectName=data;
    })
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

  search(){
    if(this.projectName== ""){
      this.projectsService.search().subscribe(data=>{
        this.searchProjectName=data;
      })
    }
      else{
        this.searchProjectName=this.searchProjectName.filter(data=>{
          return data.projectName.toLocaleLowerCase().match(this.projectName)
        })
      }
  }

  onTableDataChange(event){
    this.page = event;
    this.ngOnInit();
  }
  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ngOnInit();
  }
}
