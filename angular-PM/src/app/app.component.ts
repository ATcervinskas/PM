import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Project } from './projects/project';
import {ProjectsService} from './projects/projects.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-PM';
  projectsList:Project
  constructor (private projectsServices:ProjectsService, private router:Router){}

  ngOnInit() {
    //Toggle Click Function
      $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

  
    this.projectsServices.viewAllProjects().subscribe(data=>{
      this.projectsList=data;
    });
  }

  navLinks(id){
    this.router.navigate(['view-project/'+id])
  .then(() => {
    window.location.reload();
  });
  }
}
