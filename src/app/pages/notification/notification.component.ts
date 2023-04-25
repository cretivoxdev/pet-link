import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{

  notification: any

  constructor(private services: AuthService){}

  ngOnInit(): void {
    console.log(this.notif)

    this.services.ads()
    .subscribe(response => {
      console.log(response)
      this.notification = response
    })
  }


  notif = [
    {
      title: "Admin",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, numquam",
      image: "https://via.placeholder.com/50",
      date: "Now"
    },
    {
      title: "Admin",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, numquam",
      image: "https://via.placeholder.com/50",
      date: "Now"
    },
    {
      title: "Admin",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, numquam",
      image: "https://via.placeholder.com/50",
      date: "Now"
    },
  ]
}
