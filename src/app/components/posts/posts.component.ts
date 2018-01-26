import { Component, OnInit } from '@angular/core';
import { PostDataService } from "../../services/post-data.service"

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any;
  post = {
    comleted: false,
    title: '',
    editing: false
  };
  addSuccess:boolean = false;
  addError:boolean = false;
  addEdit:boolean = false;
  addRemove:boolean = false;

  constructor(
    public postService: PostDataService
  ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe( posts => {
      this.posts = posts;
    }, error => {
      console.log(error);
    } )
  }

  addPost(form){
    this.postService.addPost(this.post).subscribe( post => {
      this.posts.unshift(post);
      form.resetForm();
      this.addSuccess = true;
      setTimeout( () => {
        this.addSuccess = false;
      }, 2000 );
    }, error => {
      console.log(error);
      this.addError = true;
      setTimeout( () => {
        this.addError = false;
      }, 2000 );
    })
  }

  editPost(post){
    post.editing = !post.editing;
    if (!post.editing) {
      this.addEdit = true;
      setTimeout( () => {
        this.addEdit = false;
      }, 2000 );
    }
  }

  removePost(i){
    this.posts.splice(i, 1);
    this.addRemove = true;
    setTimeout( () => {
      this.addRemove = false;
    }, 2000 );
  }

}
