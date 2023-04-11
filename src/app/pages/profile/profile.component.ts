import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
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
  session = false

  // Edit Profile
  changePicture: any
  formProfile : FormGroup
  showNewImage: any

  constructor(public router: Router, private service: AuthService, public fb: FormBuilder, public http: HttpClient){
    this.formProfile = this.fb.group({
      name: [''],
      email: [''],
      ig: [''],
      location: [''],
      image: ['']
    })
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
    }, (error => {
      console.log("error");
      this.session = true
      setTimeout(() => {
        this.session = false
        this.logout()
      }, 2000)
    }))

  }

  cities = [
    { name: 'No city', value: 'nocity' },
    { name: 'Jakarta', value: 'jakarta' },
    { name: 'Surabaya', value: 'surabaya' },
    { name: 'Bandung', value: 'bandung' },
    { name: 'Medan', value: 'medan' },
    { name: 'Semarang', value: 'semarang' },
    // Add more cities here...
  ];

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    this.showName = this.selectedFile.name
  }

  handleImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/100';
  }

  // Edit Profile
  onProfileChange(event: any) {
    this.changePicture = event.target.files[0];
    this.showNewImage = this.changePicture.name
  }

  editProfile(id:string, name: string, email: string, ig: string , location: string, profile: string){
    if(email === null && ig === null && location === null && profile === null){
      email = "example@gmail.com";
      ig = "@";
      location = "nocity";
      profile = "https://via.placeholder.com/100"
    }
    this.formProfile.patchValue({
      name: name,
      email: email,
      ig: ig,
      location: location,
    })
  }

  submitProfile(){
    const formData = new FormData()
    formData.append("username", this.formProfile.get("name")!.value)
    formData.append("email", this.formProfile.get("email")!.value)
    formData.append("ig", this.formProfile.get("ig")!.value)
    formData.append("location", this.formProfile.get("location")!.value)
    formData.append("image", this.changePicture)
    // this.service.editProfile(this.userId, formData)
    // .subscribe(response => {
    //   console.log(response);
    //   location.reload()
    // }, (error) => {
    //   console.log("Form Profile Error");
    if(this.changePicture === undefined){
      this.convertImage("/assets/default.png")
      .subscribe(response => {
        console.log(response);
      })
    }
  }

  // End Edit Profile

  convertImage(imageUrl: any) {
      let metadata = {
        type: 'image/jpeg'
      }
      return this.http
        .get(imageUrl, {
          responseType: "arraybuffer"
       })
        .pipe(
          map(response => {
            return new File([response], imageUrl, metadata);
          })
        );
  }

  logout(){
    localStorage.removeItem('access_token'); // or clear the token from a cookie
    this.router.navigate(['/login']);
  }

}
