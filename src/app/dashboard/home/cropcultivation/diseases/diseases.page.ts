import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Crop } from 'src/app/models/crop.model';
import { HomeService } from '../../HomeServices/home.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.page.html',
  styleUrls: ['./diseases.page.scss'],
})
export class DiseasesPage implements OnInit {

  constructor(private homeService: HomeService,private route: ActivatedRoute) { }

  crop:Crop;
  saws = [];
  cropSub:Subscription
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('cropId'))
      {
        return
      }

      this.cropSub = this.homeService.getCrop(paramMap.get('cropId')).subscribe(crop=>{
        this.crop = crop
      })
    })

    this.cropSub = this.homeService.AllSawTips.subscribe(saws=>{
      this.saws = saws
    })

  }
}
