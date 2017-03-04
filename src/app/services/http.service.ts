import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class HttpService {

  stockQuote: string = "TSLA";



  private baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22' + this.stockQuote + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';

  constructor(private http: Http) {
    console.log('Http service works');
  }


  getData() {
    return Observable.forkJoin(
      this.http.get(this.baseUrl).map(response => response.json().query.results.quote.symbol),
      this.http.get(this.baseUrl).map(response => response.json().query.results.quote.Ask),
      this.http.get(this.baseUrl).map(response => response.json().query.results.quote.Bid),
      this.http.get(this.baseUrl).map(response => response.json().query.results.quote.Change),
      this.http.get(this.baseUrl).map(response => response.json().query.results.quote.DaysLow),
      this.http.get(this.baseUrl).map(response => response.json().query.results.quote.DaysHigh),
      this.http.get(this.baseUrl).map(response => response.json().query.results.quote.LastTradePriceOnly),
      this.http.get(this.baseUrl).map(response => response.json().query.results.quote.PreviousClose),
      this.http.get(this.baseUrl).map(response => response.json().query.results.quote.Name)
    );
  }

}// end of class

