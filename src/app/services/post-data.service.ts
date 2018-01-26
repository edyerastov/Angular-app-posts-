import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import 'rxjs/add/operator/retry'

@Injectable()
export class PostDataService {

  constructor(
    public http: HttpClient
  ) { }

  getPosts(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts').retry(3)
  }

  addPost(post){
    return this.http.post('http://jsonplaceholder.typicode.com/posts', post)
  }

  editPost(post){
    return this.http.put('http://jsonplaceholder.typicode.com/posts/1', post)
  }

}











