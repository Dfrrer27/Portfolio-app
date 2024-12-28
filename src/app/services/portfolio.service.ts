import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private dataProjectUrl = '/assets/project-data.json';
  private dataExperienceUrl = '/assets/experience-data.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.dataProjectUrl);
  }

  getExperiences(): Observable<any[]> {
    return this.http.get<any[]>(this.dataExperienceUrl);
  }
}
