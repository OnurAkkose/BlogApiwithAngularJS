import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import {LoginGuard} from './login/login.guard';
import { PostBlogComponent } from './blog/post-blog/post-blog.component';

const routes: Routes = [
  {path:'blogs',component : BlogComponent},
  {path:'login',component : LoginComponent},
  {path:'post',component : PostBlogComponent , canActivate:[LoginGuard]},  
  {path:'',redirectTo :'blogs',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
