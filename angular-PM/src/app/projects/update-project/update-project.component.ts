import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
projectId;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.projectId=data.id;
    });
  }

}
