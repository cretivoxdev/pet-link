import { Component, OnInit } from '@angular/core';
declare let Swiper: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
    new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
       paginationClickable: true,
       autoplay: false,
       spaceBetween: 30,
       direction: 'horizontal',
       slidesPerView: 1.9,
       loop: true
   });
  }

  categories = [
    {
      name: "Cats",
      icon: "",
      route: "",
    },
    {
      name: "Dogs",
      icon: "",
      route: "",
    },
    {
      name: "Bird",
      icon: "",
      route: "",
    },
  ]

}
