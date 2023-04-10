import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  selectedFile: any
  fileName= false
  showName: any
  owner: any
  pet: any

  userId : any
  nopet = false
  closeResult: string = '';

  constructor(public router: Router, private service: AuthService){

  }

  ngOnInit(): void {
    this.userId = localStorage.getItem("user_id")
    this.service.getSelf(this.userId)
    .subscribe(response => {
      this.owner = response[0].owner
      console.log(this.owner);
      this.pet = response[0].pets
      if(this.pet.length === 0){
        this.nopet = true
      } else{
        this.nopet = false
      }
    })
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.showName = this.selectedFile.name
}

handleImageError(event: any) {
  event.target.src = 'https://via.placeholder.com/100';
}

  editProfile(id:string){
    console.log(id);
  }

  logout(){
    localStorage.removeItem('access_token'); // or clear the token from a cookie
    this.router.navigate(['/login']);
  }

}
