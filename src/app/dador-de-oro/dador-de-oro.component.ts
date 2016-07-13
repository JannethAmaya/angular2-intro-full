import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import {HTTP_PROVIDERS}    from '@angular/http';

import { MenonService } from '../menon.service';
import { Menon } from '../menon';
import { Prize } from '../prize';

@Component({
  moduleId: module.id,
  selector: 'app-dador-de-oro',
  templateUrl: 'dador-de-oro.component.html',
  styleUrls: ['dador-de-oro.component.css'],
  providers: [ MenonService, HTTP_PROVIDERS ]
})
export class DadorDeOroComponent implements OnInit, OnDestroy {
  menon: Menon;
  editName: string;
  prize: string;
  private sub: any;

  constructor(
    private menonService : MenonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        let id = +params['id'];
        this.menonService.getMenon(id)
          .then(menon => {
            if (menon) {
              this.editName = menon[0].name;
              this.menon = menon[0];
            } else { // id not found
              this.gotoMenones();
            }
          });
      });

  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

    gotoMenones() {
      this.router.navigate(['/menones']);
  }

  save(){
    let newPrize = new Prize({
      id: 1,
      menonId: this.menon.id,
      date: new Date(),
      reason: this.prize
    });
    this.menon.prizes.push(newPrize);
    this.prize ='';
  }

  cancel(){
    this.gotoMenones();
  }



}
