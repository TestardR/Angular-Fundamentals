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

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 16,
        address: {
          street: 'Twin St',
          city: 'Miami',
          state: 'Alabama'
        }
      },
      {
        firstName: 'Karen',
        lastName: 'Madall',
        age: 55,
        address: {
          street: 'Millow St',
          city: 'Florida',
          state: 'Alabama'
        }
      },
      {
        firstName: 'Romain',
        lastName: 'Federer',
        age: 31,
        address: {
          street: 'Main St',
          city: 'Island',
          state: 'Alabama'
        }
      }
    ];

    this.loaded = true;

    this.addUser({
      firstName: 'David',
      lastName: 'Jackson'
    });

    this.showExtended = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
