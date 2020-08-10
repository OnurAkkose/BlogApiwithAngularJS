import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service'
import {Blog} from   './blog';
import { AccountService } from '../services/account.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {

  constructor(private blogService:BlogService, private accountService:AccountService) { }
  filterText = ""
  
  isLoggedIn(){
    return this.accountService.isLoggedIn();
  }
  logOut(){
    this.accountService.logOut();
    window.location.reload();
  }

  blogs : Blog[];
  
  ngOnInit(){ 
    this.blogService.getBlogs().subscribe(data=>{
      this.blogs = data;
    });
  }

}
