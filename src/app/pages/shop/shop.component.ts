import { Component } from '@angular/core';

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




}
