import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { ViewAllProjectsComponent } from './view-all-projects/view-all-projects.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ProjectsByDateComponent } from './projects-by-date/projects-by-date.component';
import { ProjectsByCategoryComponent } from './projects-by-category/projects-by-category.component';
import {FormsModule,NgForm,ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';





@NgModule({
  declarations: [
    ProjectsComponent,
    CreateProjectComponent,
    ViewProjectsComponent,
    DeleteProjectComponent,
    ViewAllProjectsComponent,
    UpdateProjectComponent,
    ProjectsByDateComponent,
    ProjectsByCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProjectsRoutingModule,
    NgxPaginationModule
  ]
})
export class ProjectsModule { }
