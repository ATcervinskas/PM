import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import {Project} from './project'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient:HttpClient) { }

  createProject(projectBody):Observable<Project>{
    const projectUrl ='http://localhost:3000/projects';
    return this.httpClient.post<Project>(projectUrl,projectBody);
  }

  viewProject(projectId):Observable<Project>{
    const projectUrl ='http://localhost:3000/projects/'+projectId;
    return this.httpClient.get<Project>(projectUrl);
  }

  updateProject(projectId, projectBody):Observable<Project>{
    const projectUrl ='http://localhost:3000/projects/'+projectId;
    return this.httpClient.put<Project>(projectUrl,projectBody);
  }
  deleteProject(projectId):Observable<Project>{
    const projectUrl ='http://localhost:3000/projects/'+projectId;
    return this.httpClient.delete<Project>(projectUrl);
  }

  searchCategory(categoryId):Observable<Project>{
    const projectUrl ='http://localhost:3000/projects/category='+categoryId;
    return this.httpClient.get<Project>(projectUrl);
  }

  searchDate(dataParam):Observable<Project>{
    const projectUrl ='http://localhost:3000/projects/data='+dataParam;
    return this.httpClient.get<Project>(projectUrl);
  }

  viewAllProjects(projectId):Observable<Project>{
    const projectUrl ='http://localhost:3000/projects/'+projectId;
    return this.httpClient.get<Project>(projectUrl);
  }
}
