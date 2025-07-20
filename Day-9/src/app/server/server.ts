import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: false,
  templateUrl: './server.html',
  styleUrl: './server.css'
})
export class Server {
  message: string = 'hamde';
  ishidden = true;
  imageurl: string = 'http//assets/img/logo';
  colspan: number = 2;
  isactive = true;
  iserror = true;
  username = 'mostafa';
  ishere = false;
  users = ['ali', 'mostafa', 'eman'];
  result = 'error';

  getnum(x: number, y: number): number {
    return x + y;
  }

  hello() {
    console.log('hello from event');
  }

  changevalue(event: any) {
    console.log(event.target.value);
  }
}
