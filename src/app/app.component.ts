import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sport';
  messages = [{'from':"Carlos", 'subject':"Soccer", 'content':"I like to play Soccer "}]
}
