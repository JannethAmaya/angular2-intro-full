import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HTTP_PROVIDERS}    from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';


import { MenonService } from '../menon.service';
import { Menon } from '../menon';

@Component({
  moduleId: module.id,
  selector: 'app-menones',
  templateUrl: 'menones.component.html',
  styleUrls: ['menones.component.css'],
  providers: [ MenonService, HTTP_PROVIDERS ]
})
export class MenonesComponent implements OnInit{
  menones: Promise<Menon[]>;
  constructor(
    private menonService: MenonService,
      private route: ActivatedRoute,
      private router: Router
    ) {}

  ngOnInit() { this.getMenones(); }

  getMenones(){
    this.menones = this.menonService.getMenones();
  }

   gotoDetails(menon: Menon) {
    // Navigate with Absolute link
    this.router.navigate(['/set-prize', menon.id]);
  }

 

}
