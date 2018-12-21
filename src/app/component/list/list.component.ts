import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }
  smartphone:any;
  filteredSmartphone: any;
  RAM : string;
  weight :string;
  filters = {}
   list=this.db.database.ref('/tunisianet/Smartphone');
   ref=this.db.database.ref('animaux');

  ngOnInit() {
   
    this.list.on("value", smartphone => {
      this.smartphone=smartphone.val();
      this.applyFilters()
      console.log(this.applyFilters())
    })
      
  }
  private applyFilters() {
    this.filteredSmartphone = _.filter(this.smartphone, _.conforms(this.filters) )
  }
  /// filter property by equality to rule
  filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters()
  }

  /// filter  numbers greater than rule
  filterGreaterThan(property: string, rule: any) {
    this.filters[property] = val => val > rule
    this.applyFilters()
  }
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }

}
