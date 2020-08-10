import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';

import {AccountService} from './services/account.service';
import { LoginGuard } from './login/login.guard';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PostBlogComponent } from './blog/post-blog/post-blog.component';

import { CategoryComponent } from './category/category.component';
import { BlogFilterPipe } from './blog/blog-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    LoginComponent,    
    PostBlogComponent,    
    CategoryComponent,
    BlogFilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
