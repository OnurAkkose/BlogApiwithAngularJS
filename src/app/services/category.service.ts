import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from   '../Category/category';
import { Observable } from 'rxjs';
@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/categories";

  getCategories():Observable<Category[]>{
    
    let newPath = this.path;
    
    return this.http.get<Category[]>(newPath);

  }
}
