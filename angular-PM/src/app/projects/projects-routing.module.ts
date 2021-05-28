import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { ProjectsByCategoryComponent } from './projects-by-category/projects-by-category.component';
import { ProjectsByDateComponent } from './projects-by-date/projects-by-date.component';
import { ProjectsComponent } from './projects.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ViewAllProjectsComponent } from './view-all-projects/view-all-projects.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent},
  { path: 'create-project', component: CreateProjectComponent },
  { path: 'delete-project/:id', component: DeleteProjectComponent },
  { path: 'search-category', component: ProjectsByCategoryComponent },
  { path: 'search-date', component: ProjectsByDateComponent },
  { path: 'update-project/:id', component: UpdateProjectComponent },
  { path: 'view-project/:id', component: ViewProjectsComponent },
  { path: 'view-all-projects', component: ViewAllProjectsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
