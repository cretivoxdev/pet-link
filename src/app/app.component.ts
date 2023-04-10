import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Petlink';

  isAuthenticated() {
    const token = localStorage.getItem('access_token'); // or get the token from a cookie
    return token !== null;
  }
}
