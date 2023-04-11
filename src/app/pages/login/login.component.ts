import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnInit{

  
  username: any;
  password: any
  loginForm : FormGroup
  constructor(private service: ApiServiceService, private router: Router, public fb: FormBuilder, private auth: AuthService){
    this.loginForm = this.fb.group({
      username: ["agis123", Validators.required],
      password: ["Aku664329#", Validators.required]
    })
  }

  ngOnInit(): void {
    const token = localStorage.getItem('access_token')
    if(token === ""){
      this.router.navigate(['/login'])
    } else{
      this.router.navigate(['/home'])
    }
  }


  login(){
    this.username = this.loginForm.get("username")!.value
    this.password = this.loginForm.get("password")!.value
    this.auth.login(this.username!, this.password!)
    .subscribe(response => {
      console.log(response);
      localStorage.setItem('access_token', response.token)
      localStorage.setItem('user_id', response.id)
      this.router.navigate(['/home'])
    }, error => {
      console.log(error);
    })
  }
}
