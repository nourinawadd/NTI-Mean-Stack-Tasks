import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from '../models/userModel';

@Component({
  standalone: false,
  selector: 'app-date-user',
  templateUrl: './date-user.html',
  styleUrls: ['./date-user.css']
})
export class DateUser implements OnInit {
  users: Iuser[] = [
    {
      id: 1,
      name: "Nourin Awad",
      imgurl: "https://i.pinimg.com/736x/35/a2/2f/35a22f8e5d4ee555d7873b884ed5b909.jpg",
      password: "666"
    },
    {
      id: 2,
      name: "Tamim Awad",
      imgurl: "https://i.pinimg.com/736x/3d/44/64/3d4464c95d24bed1bc08ec2dd53f8068.jpg",
      password: "124"
    }
  ];

  @Input() userid!: number;
  @Input() date_create!: Date;
  user!: Iuser;

  ngOnInit(): void {
    this.user = this.users.find(u => u.id === this.userid)!;
  }
}
