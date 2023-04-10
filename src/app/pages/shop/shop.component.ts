import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  count = 0

  shop = [
    {
      icon: "/assets/icon/shopee.png",
      link: ""
    },
    {
      icon: "/assets/icon/tokped.png",
      link: ""
    }
  ]

  plus(){
    this.count++
  }

  min(){
    if (this.count > 0) {
      this.count--;
    }
  }

  product = [
    {
      name: "Smart Pet Neck with NFC",
      price: 100000,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente magni unde nulla quam? Illo doloremque ab blanditiis aliquid, placeat quos!",
      img: "https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2022/1/6/8e99cb88-f934-4067-8845-5d09f3cea608.jpg"
    }
  ]

  cart(){
  }




}
