import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-by-category',
  templateUrl: './projects-by-category.component.html',
  styleUrls: ['./projects-by-category.component.css']
})
export class ProjectsByCategoryComponent implements OnInit {
  searchCategory='';
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data=>{
      this.searchCategory=data.category;
    });
  }

}
