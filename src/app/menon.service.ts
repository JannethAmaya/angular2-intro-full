import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Menon } from './menon';
import { Prize } from './prize';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenonService {
  //simulate id's autoincrement 
  lastPrizeId: number = 0;
  prizes: Prize[] = [];
  menones:Promise<Menon[]>;

  private menonesUrl = 'app/menones.json';

  constructor(private http: Http) {
    this.menones = this.getMenones();
  }

  getMenones(){
     return this.http.get(this.menonesUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  getMenon(value?: number) {
    return this.http.get(this.menonesUrl)
      .map((response: Response) => {
        let menones = <Menon[]>response.json().data;
        if (!value) return menones;
        return menones.filter(v => v.id === value)
      }).toPromise()
      .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    console.log(error);
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
