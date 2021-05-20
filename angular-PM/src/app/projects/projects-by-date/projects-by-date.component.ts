import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-by-date',
  templateUrl: './projects-by-date.component.html',
  styleUrls: ['./projects-by-date.component.css']
})
export class ProjectsByDateComponent implements OnInit {
searchDate
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data=>{
      this.searchDate=data.date;
    });
  }

}
