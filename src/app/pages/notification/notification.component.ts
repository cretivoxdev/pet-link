import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    console.log(this.notif)
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
