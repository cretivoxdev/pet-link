import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ads-detail',
  templateUrl: './ads-detail.component.html',
  styleUrls: ['./ads-detail.component.scss']
})
export class AdsDetailComponent implements OnInit{

  ads: any
  constructor(private service: AuthService, private route: ActivatedRoute,){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.adsDetail(id)
    .subscribe(response => {
      // console.log(response);
      this.ads = response
    })
  }

  share(){
    console.log("share");
    navigator.share({
      "title": "test",
      "url": "test"
    }).then(() => {
      console.log("share");
    })
  }
}
