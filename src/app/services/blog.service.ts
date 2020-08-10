import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Blog} from   '../blog/blog';
import { Observable } from 'rxjs';
@Injectable()
export class BlogService {

  constructor(private http:HttpClient) { }
  path="http://localhost:3000/blogs";

  getBlogs():Observable<Blog[]>{
    return this.http.get<Blog[]>(this.path);

  }
  addBlog(blog: Blog):Observable<Blog>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Blog>(this.path,blog,httpOptions);
      

  }
}
