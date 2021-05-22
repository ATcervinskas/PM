import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Categories } from './projects/categories';
import { Project } from './projects/project';
import {ProjectsService} from './projects/projects.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-PM';
  categoryList:Categories
  projectsList:Project
  constructor (private projectsServices:ProjectsService){}

  ngOnInit() {
    //Toggle Click Function
      $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    this.projectsServices.getCategories().subscribe(data=>{
      this.categoryList=data;
    })

    this.projectsServices.viewAllProjects().subscribe(data=>{
      this.projectsList=data;
    });
  }
}
