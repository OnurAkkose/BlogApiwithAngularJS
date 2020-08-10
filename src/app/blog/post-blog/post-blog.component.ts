import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../blog';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { NgForm } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css'],
  providers:[CategoryService,BlogService]

})
export class PostBlogComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private categoryService:CategoryService,
    private blogService:BlogService) { }

  blogPostForm:FormGroup;
  blog:Blog = new Blog();
  categories: Category[];

  createBlogPostForm(){
    this.blogPostForm = this.formBuilder.group({
      title:["",Validators.required],
      description:["",Validators.required]
    });
  }

  ngOnInit(): void {
    this.createBlogPostForm();
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
  }
  add(){
    if(this.blogPostForm.valid){
      this.blog = Object.assign({},this.blogPostForm.value);

    }

    this.blogService.addBlog(this.blog).subscribe(data => {
      alert("eklendi");
      window.location.reload();
    })
  }

}
