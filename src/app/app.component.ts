import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { environment } from '../environments/environment';

declare var gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  isAuthenticated = false;

  constructor(private ref: ChangeDetectorRef, private ngZone: NgZone) {
    gapi.load('client:auth2', function () {
      gapi.auth2.init({
        client_id: environment.google.client_id
      });
    });
  }

  authenticate() {
    this.ngZone.runOutsideAngular(() => {
      gapi.auth2.getAuthInstance()
        .signIn({
          scope: 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/tasks.readonly'
        })
        .then(() => {
          gapi.client.load('https://content.googleapis.com/discovery/v1/apis/tasks/v1/rest', 'v1')
            .then(() => {
              this.ngZone.run(() => this.isAuthenticated = true);
            })
        });
    });
  }
}
