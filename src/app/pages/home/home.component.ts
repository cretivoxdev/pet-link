import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import SwiperCore, { EffectCards, EffectCoverflow, EffectFade, Navigation, Pagination, SwiperOptions, Virtual, Swiper } from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  allpet : any
  cat: any
  dog: any
  categories : any
  constructor(private service: AuthService){}

  config: SwiperOptions = {
    grabCursor: true,
    // centeredSlides: true,
    slidesPerView: 2,
    initialSlide: 0,
    spaceBetween: 20,
    freeMode: true,
    pagination: true
  }

  ads: SwiperOptions = {
    grabCursor: true,
    slidesPerView: 1.1,
    spaceBetween: 20
  }
  
  ngOnInit(): void {
    this.service.allpet()
    .subscribe(response => {
      console.log(response);
      this.allpet = response

      this.cat = this.allpet.reduce((count: number, item: { data: { pet_type: string; }; }) => {
        return item.data.pet_type === 'cat' ? count + 1 : count
      }, 0) 

      this.dog = this.allpet.reduce((count: number, item: { data: { pet_type: string; }; }) => {
        return item.data.pet_type === 'dog' ? count + 1 : count
      }, 0) 
      console.log(this.cat);  
      this.categories = [
        {
          name: "Cats",
          icon: "/assets/icon/cat.jpg",
          route: "",
          total: this.cat,
        },
        {
          name: "Dogs",
          icon: "/assets/icon/dog.jpg",
          route: "",
          total: this.dog,
        },
      ]    
    })
  }

  // categories = [
  //   {
  //     name: "Cats",
  //     icon: "/assets/icon/cat.jpg",
  //     route: "",
  //     total: 12,
  //   },
  //   {
  //     name: "Dogs",
  //     icon: "/assets/icon/dog.jpg",
  //     route: "",
  //     total: 12,
  //   },
  // ]



  list = [
    {
      name: "Kudo",
      ras: "Himalaya Munchkin",
      gender: "male",
      picture: "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
      icon: "fas fa-mars",
      age: "1 Years, 3 Month"
    },
    {
      name: "Test",
      ras: "Himalaya Munchkin",
      gender: "male",
      picture: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
      icon: "fas fa-mars",
      age: "1 Years, 3 Month"
    },
    {
      name: "ADA",
      ras: "Himalaya Munchkin",
      gender: "male",
      picture: "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761.jpg",
      icon: "fas fa-mars",
      age: "1 Years, 3 Month"
    },
    {
      name: "Kudo",
      ras: "Himalaya Munchkin",
      gender: "male",
      picture: "https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg",
      icon: "fas fa-mars",
      age: "1 Years, 3 Month"
    },
  ]

  adv = [
   {
    image: "/assets/ads/1.jpg",
    url: "google.com"
   },
   {
    image: "/assets/ads/2.jpg",
    url: "google.com"
   },
   {
    image: "https://via.placeholder.com/200",
    url: "google.com"
   },

  ]

}
