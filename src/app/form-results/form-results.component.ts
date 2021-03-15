import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form-results',
  templateUrl: './form-results.component.html',
  styleUrls: ['./form-results.component.css']
})
export class FormResultsComponent implements OnInit {

  user: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userObservable.subscribe(
      (user: User) => {
        this.user = user;
      }
    )
  }

}
