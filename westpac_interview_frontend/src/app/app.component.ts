import { Component } from '@angular/core';
import { JSONPlaceHolderService } from './services/jsonplace-holder.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'westpac-interview';
  data:Array<any>;

  constructor(private JSONPlaceHolder:JSONPlaceHolderService) {
    this.data = new Array<any>();
  }

  getPostDataFromAPI() {
    this.JSONPlaceHolder.getPostData().subscribe((data) => {
      console.log(data);
      this.data = data;
    }, (error) => {
      console.log('error occured: ', error)
    })
  }
}
