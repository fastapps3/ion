import { Component } from '@angular/core';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'login1',
  templateUrl: 'login.html'
})
export class LoginPage {
//HelloIonicPage 

  constructor(hip: HelloIonicPage) {

  }
}
