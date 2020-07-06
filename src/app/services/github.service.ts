import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

// https://api.github.com/users
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  url: "https://api.github.com/users"

  getUserDetails(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}`)
  }

  getRepos(repoUrl: string){
    return this.http.get(repoUrl)
  }
}
