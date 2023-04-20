import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthService } from 'src/app/services/auth.service';
import * as CryptoJS from 'crypto-js';
const secretKey = 'Cretidev20185049291';
const secretUname = 'JKLasdiopqwl;1!@#89asdk'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnInit{

  rememberMe: boolean = true;
  username: any;
  password: any
  loginForm : FormGroup
  encryptedPassword: any
  encryptedUsername: any
  getCryp: any
  final: any
  finalUsername: any
  wrong = false

  submit = true
  loading = false
  constructor(private service: ApiServiceService, private router: Router, public fb: FormBuilder, private auth: AuthService){
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    const token = localStorage.getItem('access_token')
    if(token === ""){
      this.router.navigate(['/login'])
    } else{
      this.router.navigate(['/home'])
    }

    try{
      this.getCryp = localStorage.getItem("Store")
      const ls = JSON.parse(this.getCryp)
      this.final = CryptoJS.AES.decrypt(ls.belanjaterussampaimati, secretKey).toString(CryptoJS.enc.Utf8)
      this.finalUsername = CryptoJS.AES.decrypt(ls.tapitapiituhanyakiasan, secretUname).toString(CryptoJS.enc.Utf8)
      if(ls){
        this.loginForm.patchValue({
          username: this.finalUsername,
          password: this.final,
        })
        this.rememberMe = true
      }
    }catch{
      console.log("not");
    }
  }


  login(){
    this.loading = true
    this.submit = false
    this.username = this.loginForm.get("username")!.value
    this.password = this.loginForm.get("password")!.value
    this.encryptedUsername = CryptoJS.AES.encrypt(this.username, secretUname).toString()
    this.encryptedPassword = CryptoJS.AES.encrypt(this.password, secretKey).toString()
    // console.log(this.encryptedPassword);
    const credentials = {
      tapitapiituhanyakiasan: this.encryptedUsername, 
      belanjaterussampaimati: this.encryptedPassword, 
      // belanjaterussampaimati: this.rememberMe.toString()
    }
    if (this.rememberMe) {
     localStorage.setItem("Store", JSON.stringify(credentials))
    } else{
      localStorage.removeItem("Store")
    }
    this.auth.login(this.username!, this.password!)
    .subscribe(response => {
      // console.log(response);
      if(response.msg === 'Welcome'){
        this.loading = false
        localStorage.setItem('access_token', response.token)
        localStorage.setItem('user_id', response.id)
        this.router.navigate(['/home'])
      } else{
        this.wrong = true
        return
      }
    }, error => {
      this.loading =true
      this.submit = false
      console.log(error);
    })
  }
}
