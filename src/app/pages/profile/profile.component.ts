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
  showNewImageName: any
  strore: any
  lStorage: any
  dataStorage: any
  reupload: any
  newName: any
  updatePP = false

  constructor(public router: Router, private service: AuthService, public fb: FormBuilder, public http: HttpClient){
    this.formProfile = this.fb.group({
      username: [''],
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
      const a = localStorage.setItem("userData", JSON.stringify(response[0].owner))
      this.strore = localStorage.getItem("userData")
      let c = JSON.parse(this.strore)
      this.owner = c
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

    this.lStorage = localStorage.getItem("userData")
    this.dataStorage = JSON.parse(this.lStorage)
    
    this.formProfile.patchValue({
      username: this.dataStorage.name,
      email: this.dataStorage.email,
      ig: this.dataStorage.instagram,
      location: this.dataStorage.location,
      image: this.dataStorage.profile
    })
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
    this.showNewImageName = this.changePicture.name
    // this.showNewImage = window.URL.createObjectURL(this.changePicture)
    // console.log(this.showNewImage);
    // this.updatePP = true
  }

  updateData(pict: any){
    console.log(pict);
    this.convertImage("http://" + pict)
    .subscribe(response => {
      const newName = 'new-file-name.jpg';
      // Create a new File object with the modified name
      this.reupload = new File([response], newName, { type: response.type });
    })
  }

  submitProfile(){
    const formData = new FormData()
    formData.append('username', this.formProfile.get('username')!.value)
    formData.append('email', this.formProfile.get('email')!.value)
    formData.append('ig', this.formProfile.get('ig')!.value)
    formData.append('location', this.formProfile.get('location')!.value)

    const exist = "http://" + (this.formProfile.get("image")!.value);
    const newPict = this.changePicture

    this.convertImage(exist)

    if(newPict){
      formData.append('image', newPict)
      // console.log(newPict);
    } else {
      formData.append('image', this.reupload)
    }
    // console.log(formData.get('image'));
    this.service.editProfile(this.userId, formData)
    .subscribe(response => {
      console.log(response);
      window.location.reload()
    })
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
    localStorage.removeItem('user_id')
    localStorage.removeItem('userData')
    this.router.navigate(['/login']);
  }

}
