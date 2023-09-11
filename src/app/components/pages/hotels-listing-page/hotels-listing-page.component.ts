import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hotels-listing-page',
    templateUrl: './hotels-listing-page.component.html',
    styleUrls: ['./hotels-listing-page.component.scss']
})
export class HotelsListingPageComponent implements OnInit {

    datePickerConfig = {
        format: 'YYYY-MM-DD'
    };

    constructor() { }

    ngOnInit(): void {}

}