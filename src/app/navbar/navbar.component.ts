import { Component, OnInit } from '@angular/core';

import { DataService} from '../data.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  users = ['Laura', 'Nora', 'Lucas']
  activated: boolean = false;
  name: String = 'Laura Sophia';
  age: number = 21;

  posts=[];

  constructor(private dataService:DataService) { 
    this.dataService.getData().subscribe(data =>{
      console.log(data);
      this.posts = data;
    })
  }

  addUser(newUser){
    this.users.push(newUser.value);
    newUser.value='';
    newUser.focus();//para hacer focus del cursor, sobre el input en este caso
    console.log(this.users);
    
    return false; //detiene el recargue de la pagina
  }
  sayhello(){
    alert('hello')
  }

  ngOnInit() {


  }

}
