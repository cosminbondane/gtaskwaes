import { Component } from '@angular/core';

declare var gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  isAuthenticated = false;

  authenticate() {
    return gapi.auth2.getAuthInstance()
      .signIn({
        scope: 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/tasks.readonly'
      })
      .then(() => {
        console.log('Sign-in successful');
        this.loadClient();
      },
        (err) => {
          console.error('Error signing in', err);
        });
  }

  loadClient() {
    return gapi.client.load('https://content.googleapis.com/discovery/v1/apis/tasks/v1/rest', 'v1')
      .then(() => {
        console.log('GAPI client loaded for API');
        this.isAuthenticated = true;
      }, (err) => {
        console.error('Error loading GAPI client for API', err);
      });
  }
}
