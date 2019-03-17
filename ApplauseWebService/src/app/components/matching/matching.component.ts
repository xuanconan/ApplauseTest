import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {WebsiteService} from '../../services/website.service.client';


@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {
  baseUrl: String;
  matches: [{}];

  dropdownList1 = [];
  tempSet1 = new Set;
  selectedItems1 = [];

  dropdownList2 = [];
  tempSet2 = new Set;
  selectedItems2 = [];

  dropdownSettings = {};


  constructor( private websiteService: WebsiteService) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;

    this.websiteService.findAllMatches()
      .subscribe((matches) => {
        this.matches = matches;
        console.log(matches);

        // let count = 1;
        // for (const match of matches) {
        //   if (!this.tempSet1.has(match.country)) {
        //     this.tempSet1.add(match.country);
        //     const tempItem =  {item_id: count, item_text: match.country};
        //     count++;
        //     this.dropdownList1.push(tempItem);
        //     this.selectedItems1.push(tempItem);
        //   }
        // }
        //
        //
        // let count2 = 1;
        // for (const match of matches) {
        //   if (!this.tempSet1.has(match.description)) {
        //     this.tempSet1.add(match.description);
        //     const tempItem =  {item_id: count2, item_text: match.description};
        //     count2++;
        //     this.dropdownList2.push(tempItem);
        //     this.selectedItems2.push(tempItem);
        //   }
        // }

      });

    this.dropdownList1 = [
      { item_id: 1, item_text: 'US' },
      { item_id: 2, item_text: 'JP' },
      { item_id: 3, item_text: 'GB' },
    ];


    this.selectedItems1 = [
      { item_id: 1, item_text: 'US' },
      { item_id: 2, item_text: 'JP' },
      { item_id: 3, item_text: 'GB' },
    ];

    this.dropdownList2 = [
      { item_id: 1, item_text: 'iPhone 4' },
      { item_id: 2, item_text: 'iPhone 4S' },
      { item_id: 3, item_text: 'iPhone 5' },
      { item_id: 4, item_text: 'Galaxy S3' },
      { item_id: 5, item_text: 'Galaxy S4' },
      { item_id: 6, item_text: 'Nexus 4' },
      { item_id: 7, item_text: 'Droid Razor' },
      { item_id: 8, item_text: 'Droid DNA' },
      { item_id: 9, item_text: 'HTC One' },
      { item_id: 10, item_text: 'iPhone 3' },

    ];
    this.selectedItems2 = [
      { item_id: 1, item_text: 'iPhone 4' },
      { item_id: 2, item_text: 'iPhone 4S' },
      { item_id: 3, item_text: 'iPhone 5' },
      { item_id: 4, item_text: 'Galaxy S3' },
      { item_id: 5, item_text: 'Galaxy S4' },
      { item_id: 6, item_text: 'Nexus 4' },
      { item_id: 7, item_text: 'Droid Razor' },
      { item_id: 8, item_text: 'Droid DNA' },
      { item_id: 9, item_text: 'HTC One' },
      { item_id: 10, item_text: 'iPhone 3' },
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };

  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems1);

  }

  onItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems1);

  }
  onSelectAll(items: any) {
    console.log(items);
    console.log(this.selectedItems2);
  }

}
