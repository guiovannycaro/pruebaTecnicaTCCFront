import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router) {}

  ngOnInit(): void {

  }

  public logout(){
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  onSubmit(){
    this.logout();

  }
}

