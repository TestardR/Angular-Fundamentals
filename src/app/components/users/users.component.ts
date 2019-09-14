import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 71,
        address: {
          street: 'Twin St',
          city: 'Miami',
          state: 'Alabama'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Karen',
        lastName: 'Madall',
        age: 55,
        address: {
          street: 'Millow St',
          city: 'Florida',
          state: 'Alabama'
        },
        isActive: false,
        registered: new Date('01/12/2018 11:30:02')
      },
      {
        firstName: 'Romain',
        lastName: 'Federer',
        age: 31,
        address: {
          street: 'Main St',
          city: 'Island',
          state: 'Alabama'
        },
        isActive: true,
        registered: new Date('12/12/2020 10:30:00')
      }
    ];

    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
