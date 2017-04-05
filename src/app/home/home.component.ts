import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'lp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpService]
})
export class HomeComponent implements OnInit {

  public visible: boolean = false;

  public symbol: string[];
  public ask: number[];
  public bid: number[];
  public change: number[];
  public low: number[];
  public high: number[];

  public lastTradedPrice: number[];
  public previousClose: number[];
  public name: string[];

  public error;

  public stocks: string;

  public timer;

  getStock(stock) {
    this.stocks = stock;
    console.log(this.stocks);
  }

  stockCodes = [
    { id: 1, stockCode: "AMD" },
    { id: 2, stockCode: "YHOO" },
    { id: 3, stockCode: "GOOGL" },
    { id: 4, stockCode: "APPL" }
  ];

  selectedValue = null;
  constructor(private service: HttpService) {

  }

  ngOnInit() {
    this.timer =
      setInterval(() => {
        this.service.getData().subscribe(
          data => {
            this.symbol = new Array(data[0])
            this.ask = new Array(data[1])
            this.bid = new Array(data[2])
            this.change = new Array(data[3])
            this.low = new Array(data[4])
            this.high = new Array(data[5])
            this.lastTradedPrice = new Array(data[6])
            this.previousClose = new Array(data[7])
            this.name = new Array(data[8])
          },
          err => { this.error = true })
      }, 1000)
  }

  showMe() {
    this.visible = !this.visible
  }


} // end class
