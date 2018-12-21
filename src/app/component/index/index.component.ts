import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from '../../service/smartphone.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  private Smartphone=[];
  constructor(private _SmartphoneService:SmartphoneService ) { }

  ngOnInit() {
    this._SmartphoneService.getSmartphone("SAMSUNG GALAXY GRAND PRIME PLUS")
        .subscribe(data =>{this.Smartphone=data;console.log(data)});
        
  }

}
