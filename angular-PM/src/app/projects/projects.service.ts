import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import {Project} from './project'
import {Tasks} from './tasks'
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

  getTasks(project):Observable<Tasks>{
    const categoryUrl ='http://localhost:3000/tasks?project='+project;
    return this.httpClient.get<Tasks>(categoryUrl);
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
  deleteProjectTasks(project):Observable<Tasks>{
    const projectUrl ='http://localhost:3000/tasks?project='+project;
    return this.httpClient.delete<Tasks>(projectUrl);
  }

  searchCategory(categoryId):Observable<Project>{
    const projectUrl ='http://localhost:3000/projects/category='+categoryId;
    return this.httpClient.get<Project>(projectUrl);
  }

  search():Observable<Project[]>{
    const projectUrl ='http://localhost:3000/projects';
    return this.httpClient.get<Project[]>(projectUrl);
  }

  viewAllProjects():Observable<Project>{
    const projectUrl ='http://localhost:3000/projects';
    return this.httpClient.get<Project>(projectUrl);
  }
  createTask(taskBody):Observable<Tasks>{
    const projectUrl='http://localhost:3000/tasks';
    return this.httpClient.post<Tasks>(projectUrl,taskBody);
  }
  deleteTask(taskId):Observable<Tasks>{
    const projectUrl ='http://localhost:3000/tasks/'+taskId;
    return this.httpClient.delete<Tasks>(projectUrl);
  }
  updateTask(taskid, body):Observable<Project>{
    const projectUrl ='http://localhost:3000/tasks/'+taskid;
    return this.httpClient.put<Project>(projectUrl,body);
  }
}
