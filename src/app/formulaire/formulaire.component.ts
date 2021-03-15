import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from'../user.model';
import { UserService } from'../user.service';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {

  userInfos: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userInfos = this.formBuilder.group({
      lastName: null,
      firstName: null,
      street: null,
      zipCode: null,
      city: null,
      phone: null,
      email: null,
      sexe: null,
      password: null,
      login: null, 
      country: null,
    });
    
  }

  submit(){
    const userInfosArray = this.userInfos.value;
    const newUser = new User(
      userInfosArray['lastName'],
      userInfosArray['firstName'],
      userInfosArray['street'],
      userInfosArray['zipCode'],
      userInfosArray['city'],
      userInfosArray['phone'],
      userInfosArray['email'],
      userInfosArray['sexe'],
      userInfosArray['password'],
      userInfosArray['login'],
      userInfosArray['country']
    )
    this.userService.addUser(newUser);
  }

  ngOnInit(): void {
  }

}
