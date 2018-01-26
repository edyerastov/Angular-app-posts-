import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"

//Components
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';

//Services
import { PostDataService } from "./services/post-data.service"

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
