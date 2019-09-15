import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Madall',
        email: 'karen@gmail.com',
        isActive: false,
        registered: new Date('01/12/2018 11:30:02'),
        hide: true
      },
      {
        firstName: 'Romain',
        lastName: 'Federer',

        email: 'romain@gmail.com',
        isActive: true,
        registered: new Date('12/12/2020 10:30:00'),
        hide: true
      }
    ];

    this.loaded = true;
  }

  addUser(user: User) {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(123);
  }
}
